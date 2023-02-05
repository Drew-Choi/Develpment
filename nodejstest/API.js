const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params

    if(name == 'dog') {
        res.json({'sound': '멍멍', 'img': 'dog1.jpeg'})
    } else if(name == 'cat'){
        res.json({'sound': '야옹', 'img': 'cat2.jpeg'})
    } else if(name == 'pig'){
        res.json({'sound': '꿀꿀', 'img': 'pig3.png'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

app.listen(3001)