var mysql = require('mysql');

/* var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'C724'
});

connection.connect(); */

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "C724",
})

pool.query('insert into users Values (\'tang26622\', \'11111111\')',
    function(error, results, fields) {
        if (error) throw error;
        console.log(results);
    });

/* connection.end(); */