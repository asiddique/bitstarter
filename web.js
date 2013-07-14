#!/usr/bin/env node
var fs=require('fs');
var inputFile="index.html";

var strOut=fs.readFileSync(inputFile, 'utf8');

var express = require('express');
var app = express.createServer(express.logger());

 app.get('/', function(request, response) {
  response.send(strOut);
 });


var port = process.env.PORT || 5000;
 app.listen(port, function() {
  console.log("Listening on " + port);
 });

