const conn = require('../config/db')

exports.list = async (req, res) => {
    try {
        const userId = req.user.id
        const result = await conn.query('SELECT * FROM todos WHERE user_id = $1', [userId])
        res.json({ message: 'show data ok', data: result.rows })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
}

exports.create = async (req, res) => {
    try {
        const userId = req.user.id
        const task = req.body.task
        const result = await conn.query('INSERT INTO todos (task, user_id) VALUES ($1, $2) RETURNING id', [task, userId])
        res.json({ message: 'insert ok', insertId: result.rows[0].id })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.user.id
        const { task, status } = req.body

        const check = await conn.query('SELECT * FROM todos WHERE id = $1 AND user_id = $2', [id, userId])
        if (check.rows.length === 0) {
            return res.status(404).json({ message: 'todo not found' })
        }

        await conn.query('UPDATE todos SET task = $1, status = $2 WHERE id = $3', [task, status, id])
        res.json({ message: 'update ok', updatedId: id })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.user.id

        const check = await conn.query('SELECT * FROM todos WHERE id = $1 AND user_id = $2', [id, userId])
        if (check.rows.length === 0) {
            return res.status(404).json({ message: 'todo not found' })
        }

        await conn.query('DELETE FROM todos WHERE id = $1', [id])
        res.json({ message: 'delete ok', deletedId: id })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
}

exports.removeAll = async (req, res) => {
    try {
        const userId = req.user.id

        const check = await conn.query('SELECT * FROM todos WHERE user_id = $1', [userId])
        if (check.rows.length === 0) {
            return res.status(404).json({ message: 'todo not found' })
        }

        await conn.query('DELETE FROM todos WHERE user_id = $1', [userId])
        res.json({ message: 'delete ok', deletedUserId: userId })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
}

exports.toggleStatus = async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.user.id

        const check = await conn.query('SELECT * FROM todos WHERE id = $1 AND user_id = $2', [id, userId])
        if (check.rows.length === 0) {
            return res.status(404).json({ message: 'todo not found' })
        }

        const current = check.rows[0].status
        await conn.query('UPDATE todos SET status = $1 WHERE id = $2', [!current, id])
        res.json({ message: 'toggle ok' })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
}

