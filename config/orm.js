var connection = require("./connection.js");

//HAD TROUBLE WITH THE 
//SELECTALL/ INSERTONE / AND UPDATE ONE FUNCTIONS
var orm = {
	selectAll: function(){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err,results){
			if(err){
				throw err;
			}
			cb(results);
		});
    }
    }

    insertOne: function() {
        var queryString = "INSERT INTO " + table;
 
        connection.query(function(err, results){
            if(err){
                throw err;
            }
        });    
    }

    updateOne: function (table) {
        var queryString = "UPDATE " + table;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
        });
    }
    



module.exports = orm;