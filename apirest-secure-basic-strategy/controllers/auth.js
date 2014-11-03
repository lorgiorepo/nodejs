/**
 * Created by lorgio on 11/2/14.
 */

var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/user');

passport.use(new BasicStrategy(
    function(username, password, callback){
        User.findOne({ username: username }, function(err, user){
            if(err) {return callback(err); }

            // No existe un usuario encontrado con ese username
            if(!user) { return callback(null, false); }

            // Asegurandonos que el password esta correcto
            user.verifyPassword(password, function(err, isMatch){
                if(err) { return callback(err); }

                // El password no coincide
                if(!isMatch) { return callback(null, false); }

                // Exito
                return callback(null, user);
            });
        });
    }
));

exports.isAuthenticated = passport.authenticate('basic', { session : false });

