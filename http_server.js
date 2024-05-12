var http = require('http');
http.createServer (function(req,res){
    res.write('Hello World! Welcome to my first Nodejs Server!')
    res.end()
})