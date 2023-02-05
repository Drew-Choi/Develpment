const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    res.json({'userid': q})
})

app.get('/sound/:name', function (req, res) {
    const { name } =req.params
    res.send('고양이')
})

app.listen(3000)