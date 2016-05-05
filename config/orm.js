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
	getHelp : function(wantHelp, callback){
		var script = "INSERT INTO get_help (name, phone, email, available) VALUES(?, ?, ?, ?)";
		connection.query(script, [wantHelp.name, wantHelp.phone, wantHelp.email, wantHelp.available], function(err, result){
			callback(result);
			console.log(wantHelp);
			console.log(result);
		})
	}
}

module.exports = orm;