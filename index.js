require('babel/register')({
  stage: 0
});

var app = require('./src/server.js');
var express = require('express');

app.listen(3000, function(){
  console.log('Express listening on port 3000');
});