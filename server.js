var express = require('express');
var app     = express();
let Application = require("./data/application_crud")
// static files
app.use(express.static(__dirname + '/public'));


app.get('/companies', Application.showAll)

app.listen('5000')

console.log('Magic happens on port 5000');

exports = module.exports = app;