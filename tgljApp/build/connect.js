function connect(callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: '',
	    database:'wz'
	});

	connection.connect(function (err) {
		if (err) {
			callback(null);
		}else{
			callback(connection);
		}
	});
}
module.exports.connect = connect;