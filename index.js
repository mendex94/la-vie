const express = require('express')
const db = require('./src/database')
const routes = require('./src/routes')
const handleError = require('./src/middleware/handleError')
const app = express()

db.hasConnection()
app.use(express.json())
app.use(routes)
app.use(handleError)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 no localhost.')
})