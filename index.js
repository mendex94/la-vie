const express = require('express')
const db = require('./src/database')
const app = express()

db.hasConnection()
app.use(express.json())

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 no localhost.')
})