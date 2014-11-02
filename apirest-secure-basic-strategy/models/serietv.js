/**
 * Created by lorgio on 11/1/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var serietv = new Schema({
    titulo: {type: String },
    temporadas: {type: Number},
    pais: {type: String},
    genero: {
        type: String,
        enum: ['Comedia', 'Fantasia', 'Drama', 'Terror', 'Sci-FI']
    }
});

module.exports = mongoose.model('SerieTV', serietv);