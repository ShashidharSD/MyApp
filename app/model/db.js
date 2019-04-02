var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'student'
});

connection.connect(function(err) {
    if (err) throw err;
    else{
        console.log('db connected');
        
    }
});

module.exports = connection;
