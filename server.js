var express = require('express');
require('dotenv').config();
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var port = process.env.PORT || 2000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req,res) {
    console.log('get route hit');
    res.render('index');
})

app.get('/upload', function(req,res) {
    console.log('upload get hit');
    res.render('upload');
})

app.post('/upload', function(req,res) {
    console.log('upload post hit');
    res.send('uploaded');
})


app.listen(port, function() {
    console.log('server is running on port: ' + port);
})

