var express = require('express');
var path = require('path');
// var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public/dist')));
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app)
app.listen(8000, function() {
    console.log('The World is Listening on port 8000');
})