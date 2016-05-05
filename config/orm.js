var connection = require('./connection.js');

var orm = {
	// select all
	selectAll : function(table, callback){
		var script = "SELECT * from " + table;
		connection.query(script, function(err, result){
			callback(result);
			console.log(result);
		})
	},
	// add helper (giveHelp)
	giveHelp : function(helper, callback){
		var script = "INSERT INTO give_help (name, phone, email, available) VALUES(?, ?, ?, ?)";
		connection.query(script, [helper.name, helper.phone, helper.email, helper.available], function(err, result){
			console.log(result);
		})
	},
	// add helpee (getHelp)
	getHelp : function(wantHelp, callback){
		var script = "INSERT INTO get_help (name, phone, email, available, need_help) VALUES(?, ?, ?, ?, ?)";
		connection.query(script, [wantHelp.name, wantHelp.phone, wantHelp.email, wantHelp.available, need_help], function(err, result){
			console.log(result);
		})
	}
}

module.exports = orm;