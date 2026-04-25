const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const conn = require('../config/db')

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body
        const passwordHashed = await bycrypt.hash(password, 10)

        // เช็คก่อนว่ามี username นี่อยู่แล้วรึป่าว
        const [rows] = await conn.query('SELECT * FROM users WHERE username = ?', [username])
        if (rows.length !== 0) {
            return res.json({ message: 'username already exits' })
        }

        const results = await conn.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, passwordHashed])
        res.json({
            message: 'register success',
            data: { username, passwordHashed }
        })
    } catch (error) {
        res.status(500).json({
            message: 'register error',
            error
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body

        // เช็คว่า username ตรงที่มีในฐานข้อมูลรึป่าว
        const [rows] = await conn.query('SELECT * FROM users WHERE username = ?', [username])
        if (rows.length === 0) {
            return res.status(400).json({ message: 'username incorrect' })
        }

        // เอา password มา check กับข้อมูลในฐานข้อมูล
        const isMatch = await bycrypt.compare(password, rows[0].password)
        if (isMatch) {
            const token = jwt.sign({ id: rows[0].id, username: username }, 'secret_key', { expiresIn: '1d' })
            res.json({
                message: 'login success',
                token
            })
        } else {
            res.status(400).json({ message: 'password incorrect' })
        }
    } catch (error) {
        res.status(500).json({
            message: 'login error',
            error
        })
    }
}