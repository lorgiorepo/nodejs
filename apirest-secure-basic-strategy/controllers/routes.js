/**
 * Created by lorgio on 11/1/14.
 */
module.exports = function(app){
    var SerieTV = require('../models/serietv');
    var authController = require('../controllers/auth');

    // GET
    findAllSeriesTV = function(req, res){
        SerieTV.find(function(err, seriestv){
            if(!err) res.send(seriestv)
            else console.log('ERROR: '+ err);
        });
    };

    // GET
    findBYID = function(req, res){
        SerieTV.findById(req.params.id, function(err, serietv){
           if(!err) res.send(serietv);
           else console.log('ERROR: '+ err);
        });
    };

    // POST
    addSerieTV = function(req, res){
        console.log('POST');
        console.log(req.body);

        var serietv = new SerieTV({
            titulo: req.body.titulo,
            temporadas: req.body.temporadas,
            pais: req.body.pais,
            genero: req.body.genero
        });

        serietv.save(function(err){
            if(!err) console.log('SerieTV Guardada');
            else console.log('ERROR: '+ err);
        });

        res.send(serietv);
    };

    // PUT
    updateSerieTV = function(req, res){
        SerieTV.findById(req.params.id, function(err, serietv){
            serietv.titulo = req.body.titulo;
            serietv.temporadas = req.body.temporadas;
            serietv.pais = req.body.pais;
            serietv.genero = req.body.genero;

            serietv.save(function(err){
                if(!err) console.log('SerieTV Actualidad!');
                else console.log('ERROR: '+ err);
            });

            res.send(serietv);
        });
    };

    // DELETE
    deleteSerieTV = function(req, res){
        SerieTV.findById(req.params.id, function(err, serietv){
            serietv.remove(function(err){
                if(!err) console.log('SerieTV Borrada!');
                else console.log('ERROR: '+ err);
            })
        });
        res.status(200).send('Serie borrada correctamente!');
    };

    // API ROUTES
    app.get('/seriestv', authController.isAuthenticated, findAllSeriesTV);
    app.get('/seriestv/:id', authController.isAuthenticated,  findBYID);
    app.post('/seriestv', authController.isAuthenticated,  addSerieTV);
    app.put('/seriestv/:id', authController.isAuthenticated,  updateSerieTV);
    app.delete('/seriestv/:id', authController.isAuthenticated,  deleteSerieTV);
}
