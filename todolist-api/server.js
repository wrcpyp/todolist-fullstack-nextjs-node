const express = require('express')
const cors = require('cors')
const { readdirSync } = require('fs')

const app = express()

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

app.listen(8000, () => {
    console.log("Http Server Running on port 8000")
})