const express = require('express');
const mongoose = require('mogoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();

mongoose.connect('mongodb://localhost:27017/1004letter', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('Database Connection!')
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: ture}))
app.use(bodyParser.json())

app.listen(1004);