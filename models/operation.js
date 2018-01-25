	
var db=require('../app'); //reference of dbconnection.js
 
var operate={
 
getAllvalue:function(callback){
 
return db.query("Select * from dict",callback);
 
},
 getmeaningByword:function(id,callback){
 
return db.query("select * from dict where word=?",[word],callback);
 },
 add:function(dict,callback){
 return db.query("Insert into dict values(?,?)",[dict.word,dict.meaning],callback);
 },
 delete:function(id,callback){
  return db.query("delete from dict where word=?",[word],callback);
 },
 update:function(id,Task,callback){
  return db.query("update dict set meaning=? where word=?",[dict.word,dict.meaning],callback);
 }
 
};
 module.exports=dict;