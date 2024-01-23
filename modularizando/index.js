const db = require('./dbAlunos')
const dbAlunos = db.AlunosDatabase()
const express = require('express')
const app = express()

app.use(express.json())

app.get('/alunos', async (req, res) => {
    res.status(200).send(await dbAlunos.list())
})

app.get('/alunos/:id', async (req, res) => {
    const alumnFounded = await dbAlunos.get(req.params.id)
    res.status(200).send(alumnFounded)
    console.log(alumnFounded)
})

app.post('/alunos', async (req, res) =>{
    res.status(200).send(req.body)
    const added = await dbAlunos.insert(req.body)
    console.log(added)
})

app.put('/alunos/:id', async (req, res) => {
    const putAlumn = await dbAlunos.update(req.body, req.params.id)
    res.status(200).send('aluno foi atualizado')
    console.log(putAlumn)
})

app.delete('/alunos/:id', async (req, res) => {
    const actionDelete = await dbAlunos.del(req.params.id)
    res.status(200).send(`aluno deletado com sucesso`)
})

app.listen(3000, () => {
    console.log('Servidor está aberto na porta 3000')
})