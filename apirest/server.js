/**
 * Created by lorgio on 11/1/14.
 */
var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/seriestv', function(err, res){
    if(err) console.log('ERROR: Conectando a la BD: '+ err);
    else console.log('Conexion a la BD realizada');
});

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
})

app.get('/', function(req, res) {
    res.send('Hola, MUnto!');
});

require('./routes')(app);

app.listen(5001);
console.log('Servidor Express escuchando en el puerto 5000');

