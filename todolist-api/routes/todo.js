const express = require('express')
const { list, create, update, remove, removeAll, toggleStatus } = require('../controllers/todoController')
const authMiddleware = require('../middleware/auth')
const router = express.Router()

router.get('/todos', authMiddleware, list)
router.post('/todos', authMiddleware, create)
router.put('/todos/:id', authMiddleware, update)
router.delete('/todos/:id', authMiddleware, remove)
router.delete('/todos', authMiddleware, removeAll)
router.patch('/todos/:id', authMiddleware, toggleStatus)

module.exports = router