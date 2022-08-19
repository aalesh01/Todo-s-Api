const express = require('express')
const { postapi, getapi, putapi, deleteapi } = require('./CRUD')

const app = express();
app.use(express.json())

app.post('/',postapi)
app.get('/',getapi)
app.put('/:id',putapi)
app.delete('/:id',deleteapi)


app.listen('8080')