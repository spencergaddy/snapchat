'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'red911',
});

connection.connect(function(err) {
    if (err != null) {
        console.log('Error connecting to mysql:' + err + '\n');
        res.end('shit happens');
    }
});

exports.phone = function(req, res) {
    var num = req.params.num;

    if (num.indexOf('-') !== -1) {
        var re = new RegExp('-', 'g');
        num = num.replace(re, '');
    }

    if (num.indexOf(' ') !== -1) {
        var re = new RegExp(' ', 'g');
        num = num.replace(re, '');
    }

    console.log(num);

    connection.query("select * from snapchat.records where phone = '" + num + "XX'", function(err, rows) {
        // There was a error or not?
        if (err != null) {
            res.end("Query error:" + err);
        } else {
            // Shows the result on console window
            console.log(rows[0]);
            res.json(rows[0]);
            res.end();
        }
    });
};