var orm = require("../config/orm.js");


var burgers = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(cb){
		orm.insertOne("burgers",  function(res){
			cb(res);
		});
	},

	updateOne: function(cb){
		orm.updateOne("burgers", function(res){
			cb(res);
		});
	},
};

module.exports = burgers;