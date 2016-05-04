// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var orm = require('./config/orm.js');

var connection = require('./config/connection.js')


// Express Config
var app = express();
var PORT = process.env.PORT || 4000;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Load static files
app.use(express.static('./app/public'));

// Routing 
require('./app/routing/routes.js')(app);

//Listener 
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});