var express = require('express');
require('dotenv').config();
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');
var multer = require('multer');
var upload = multer({dest: './uploads/'});
var cloud = require('cloudinary');
var app = express();
var port = process.env.PORT || 2000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req,res) {
    console.log('get route hit');
    res.render('index');
})

app.get('/upload', function(req,res) {
    console.log('upload GET hit');
    res.render('upload');
})

app.post('/upload', upload.single('myFile'), function(req,res) {
    console.log('upload POST hit');
    cloud.uploader.upload(req.file.path, function(result) {
        console.log(result);
    })
    res.redirect('/');
})


app.listen(port, function() {
    console.log('server is running on port: ' + port);
})

