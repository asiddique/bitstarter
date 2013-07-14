#!/usr/bin/env node
var fs=require('fs');
var inputFile="index.html";

fs.readFileSync(inputFile, 'utf8', function(err,data){
 var strResult=data;
 var express = require('express');
 var app = express.createServer(express.logger());

 app.get('/', function(request, response) {
  response.send(strResult);
 });

if(err) throw err;

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
  console.log("Listening on " + port);
 });
});
