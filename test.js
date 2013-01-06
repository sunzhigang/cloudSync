#!/usr/bin/env node
var express = require('express');
var engines = require('consolidate');

var app = express();
app.engine('haml', engines.haml);
app.engine('html', engines.hogan);

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(__dirname + '/'));
});


app.get('/', function(req, res){
    res.sendfile('start.html');
});

app.listen(8080);
