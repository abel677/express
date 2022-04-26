const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'medical'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log('base dato conectada.')
    }
});

module.exports = mysqlConnection;
