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

// Routing
// Load static files
app.use(express.static(__dirname +'/public'));

app.get('/getHelp',function(req, res){
	res.sendFile(path.join(__dirname + '/public/createNeedHelp.html'));
});

app.get('/giveHelp',function(req, res){
	res.sendFile(path.join(__dirname + '/public/createHelper.html'));
});

app.use(function(req, res){
	res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.get('/api/all/:table?', function(req, res){
var data =  orm.selectAll(req.params.table, function(data){
				console.log(data); });
});


app.post('/api/get-help', function(req, res){
	var wantHelp = req.body;

	orm.getHelp (wantHelp, function(data){
	})
});

app.post('/api/give-help', function(req, res){
	var helper = req.body;
	
	orm.giveHelp (helper, function(data){
	})
});


//Listener 
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});