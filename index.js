var express = require('express');
var bodyParser = require('body-parser');

// File from the app
var todoController = require('./controllers/todoController');

var app = express();
var port = 5000;

// Set up template engine
app.set('view engine', 'ejs');

// Set up static files
app.use(express.static('./public'));

// Fire controllers
todoController(app);

// Listening to port
app.listen(port);
console.log('You are Listening on port: ' + port);
