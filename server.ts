/// <reference path="_reference.ts" />

import express = require('express');
import path = require('path');

var app:express.Express = express();

var port:number = process.env.port || 3000;
//main route
app.get('/', function(req:express.Request, res:express.Response){
    //res.send('Hello Express!')
    res.sendFile(path.join(__dirname, "Public", "index.html"));
});
//Route for info page
app.get('/info', function(req:express.Request, res:express.Response){
    res.send('Your custom info page goes here')
});

app.listen(port, function(){
    console.log("App server started on...port" + port);
});

/*
import http = require('http');

var port:number = process.env.port || 3000;

var server:http.Server = createServer(function(req:http.ServerRequest, res:http.ServerResponse){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end("Hello Node!");
});

server.listen(port, function(){
    console.log("Server started...Listening on port" + port);
});
*/
