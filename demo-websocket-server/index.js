const express = require('express')
const http = require('http')
const webSocket = require('ws')

const app = express()


const server = http.createServer(app)

const wss= new webSocket.Server({ server })

wss.on('connection', (ws) => {

    ws.on('message', (message) =>{
        console.log('Mensagem recebida: ', message)
        ws.send(message)
    })
})


server.listen(process.env.PORT || 9898, ()=>{
    console.log('Servidor inicializado na porta:', server.address().port)
})