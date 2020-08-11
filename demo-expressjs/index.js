const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/pt', (req, res) => res.send('Olá Mundo!'))

app.post('/', (req, res) => res.send({status: "ok"}))

app.listen(port, () => console.log(`Aplicação rodando na porta ${port} http://localhost:${port}`))