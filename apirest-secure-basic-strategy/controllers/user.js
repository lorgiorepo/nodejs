/**
 * Created by lorgio on 11/2/14.
 */

module.exports = function(app){
    var User = require('../models/user');
    var authController = require('../controllers/auth');
    var passport = require('passport');

    createUser = function(req, res){
        var user = new User({
            username: req.body.username,
            password: req.body.password
        });

        user.save(function(err){
            if(err) res.send(err);
            res.json({message: 'El usuario ha sido creado correctamente'})
        });
    };

    getUsers = function(req, res){
        User.find(function(err, users){
            if(err) res.send(err);
            res.json(users);
        });
    };

    // API ROUTES
    app.post('/users', createUser);
    app.get('/users', authController.isAuthenticated, getUsers);
}
