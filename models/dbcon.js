var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'shrinivasj40',
 database:'dictionary'
 
});
 module.exports=connection;