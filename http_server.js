var http = require('http');
var express = require('express');
var app = express();

http.createServer (function(req,res){
    res.write('Hello World! Welcome to my first Nodejs Server!')
    res.end()
})
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example App listening at http://%s%s",host,port)
})