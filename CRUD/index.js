const express = require('express')
const app = express()

app.use(express.json())

app.listen('3000', () => {
    console.log('servidor aberto na porta 3000')
})

app.get('/usuarios', (req, res) => {
    res.status(200).send(req.body)
    console.log('GET:\n', req.body) // corpo da REQuisição
})

app.get('/usuarios/:id', (req, res) => {
    console.log(req.params.id) // pegar o id
    //console.log(req.body)
    res.send('GET por id feito com sucesso')
})

app.post('/usuarios', (req, res) => {
    res.status(200).send('POST feito com sucesso')
    console.log(req.body)
})

app.put('/usuarios/:id', (req, res) => {
    res.status(200).send(`PUT no objeto de id: ${req.params.id} feito com sucesso`)
    console.log(req.body)
})

app.delete('/usuarios/:id', (req, res) => {
    res.status(200).send(`DELETE no objeto de id: ${req.params.id} feito com sucesso`)
    console.log(req.body)
})