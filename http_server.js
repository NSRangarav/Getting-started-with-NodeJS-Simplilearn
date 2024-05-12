var http = require('http');
var express = require('express');
var app = express();

http.createServer (function(req,res){
    res.write('Hello World! Welcome to my first Nodejs Server!')
    res.end()
}).listen(9081)