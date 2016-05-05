var connection = require('./connection.js');

var orm = {
	// select all
	selectAll : function(table, callback){
		var script = "SELECT * from "+table;
		connection.query(script, function(err, result){
			callback(result);
		})
	},
	// add helper (giveHelp)
	giveHelp : function(name, phone, email, available){
		var script = "INSERT INTO give_help (name, phone, email, available) VALUES(?, ?, ?, ?)";
		connection.query(script, [name, phone, email, available], function(err, result){
			callback(result);
		})
	},
	// add helpee (getHelp)
	getHelp : function(name, phone, email, available, need_help){
		var script = "INSERT INTO get_help (name, phone, email, available, need_help) VALUES(?, ?, ?, ?, ?)";
		connection.query(script, [name, phone, email, available, need_help], function(err, result){
			callback(result);
		})
	}
}

module.exports = orm;