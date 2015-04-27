var express = require('express');
var cluster = require('cluster');
var app = express();

app.get('/', function(req, res){
	res.end("Hello world! from worker " + cluster.worker.id + " with process id; "+ cluster.worker.process.pid);
});

app.listen(3009, function(){
	console.log("Running at PORT 3009");
});