const express = require('express')
const { Tutor, Student} = require ('./models')

const app = express()
const port = 3000

app.get('/', (req,res) => {
    Tutor.findAll({
        include: [Student]
    })
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        res.send(err)
    })
})


app.listen(port, () => {
    console.log('app running')
})