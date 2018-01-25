var express = require('express');
 var router = express.Router();
 var Task=require('../models/operation');
 
router.get('/:word?',function(req,res,next){
 
if(req.params.word){
 
dict.getmeaningByword(req.params.word,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
dict.getAllvalue(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });
 router.post('/',function(req,res,next){
 
Task.add(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/:word',function(req,res,next){
 
Task.delete(req.params.word,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/:word',function(req,res,next){
 
Task.update(req.params.word,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports=router;