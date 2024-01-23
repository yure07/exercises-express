const express = require('express')
const app = express()

app.use(express.json()) // mostrar que vamos usar informacoes json

const users = []

let idUser = 0

app.get('/users', (req, res) => {
    res.status(200).send({users: users})
    console.log({users: users})
})

app.post('/users', (req, res) => {
    idUser++
    users.push({id: idUser, ...req.body})
    res.status(200).send({id: idUser, ...req.body})
    console.log(req.body)
})

app.get('/users/:id', (req, res) => {
    const userId = req.params.id
    const userFound = users.find(user => user.id == userId)
    res.status(200).send(userFound)
    console.log(users.find(userFound))
})

app.put('/users/:id', (req, res) => {
    const newUser = req.body
    const userId = req.params.id
    users[userId - 1] = newUser
    res.status(200).send('user foi atualizado !')
    console.log(req.body)
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    users.splice((userId - 1), 1) // remover um elemento a partir do indice userId - 1
    res.status(200).send(`delte de user do id: ${userId}`)
})

app.listen('3000', () => {
    console.log('Servidor está aberto na porta 3000')
})