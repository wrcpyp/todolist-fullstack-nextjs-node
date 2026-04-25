const conn = require('../config/db')

exports.list = async (req, res) => {
    try {
        const userId = req.user.id
        const [rows] = await conn.query('SELECT * FROM todos WHERE user_id = ?', [userId])
        res.json({
            message: 'show data ok',
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}

exports.create = async (req, res) => {
    try {
        const userId = req.user.id
        const task = req.body.task
        const [result] = await conn.query('INSERT INTO todos (task, user_id) VALUES (?, ?)', [task, userId])
        res.json({
            message: 'insert ok',
            insertId: result.insertId
        })
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.user.id
        const datas = req.body

        // เช๊คว่า todo นี้เป็นของ user นี้จริงมั้ย
        const [rows] = await conn.query('SELECT * FROM todos WHERE id = ? AND user_id = ?', [id, userId])
        if (rows.length === 0) {
            return res.status(400).json({ message: 'todo not found' })
        }

        await conn.query('UPDATE todos SET ? WHERE id = ?', [datas, id])
        res.json({
            message: 'update ok',
            updatedId: id
        })
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.user.id

        // เช๊คว่า todo นี้เป็นของ user นี้จริงมั้ย
        const [rows] = await conn.query('SELECT * FROM todos WHERE id = ? AND user_id = ?', [id, userId])
        if (rows.length === 0) {
            return res.json({ message: 'todo not found' })
        }

        await conn.query('DELETE FROM todos WHERE id = ?', [id])
        res.json({
            message: 'delete ok',
            deletedId: id
        })
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}

exports.removeAll = async (req, res) => {
    try {
        const userId = req.user.id

        // เช๊คว่า todo นี้เป็นของ user นี้จริงมั้ย
        const [rows] = await conn.query('SELECT * FROM todos WHERE user_id = ?', [userId])
        if (rows.length === 0) {
            return res.json({ message: 'todo not found' })
        }

        await conn.query('DELETE FROM todos WHERE user_id = ?', [userId])
        res.json({
            message: 'delete ok',
            deletedUserId: userId
        })
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}