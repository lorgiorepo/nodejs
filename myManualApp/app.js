var express = require('express');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());

app.get('/', function(request, response){
	// Getting the user-agent
	console.log(request.get('user-agent'));
	// Getting content-types accepted
	console.log(request.accepted);
	// Getting character sets
	console.log(request.acceptedCharsets);
	// Geeting accepted languages
	console.log(request.acceptsLanguage('es') ? 'yes' : 'no');
	response.render('index', {
		title: 'Hello Express!',
		username: 'Lorgio'
	});
});

app.get('/prohibited', function(request, response){
	response.send(403, 'Access Denied');
});

app.get('/info', function(request, response){
	response.json({message: 'Hello from json'});
});

app.get('/users/:username', function(request, response){
	// Getting the user-agent
	console.log(request.get('user-agent'));
	// Getting content-types accepted
	console.log(request.accepted);
	// Getting character sets
	console.log(request.acceptedCharsets);
	// Geeting accepted languages
	console.log(request.acceptsLanguage('es') ? 'yes' : 'no');
	var name = request.params.username;
	response.send('Hola! ' + name + ' !');
});

app.post('/users', function(request, response){
	var user = request.body.username;
	response.send('Hola! '+ user + ' !');
});

app.get(/\/personal\/(\d*)\/?(edit)?/, function(request, response){
	var message = "The employee profile # " + request.params[0];
	if(request.params[1] == 'edit'){
		message = 'Editing ' + message;
	}else{
		message = 'See ' + message;
	}
	response.send(message);
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
