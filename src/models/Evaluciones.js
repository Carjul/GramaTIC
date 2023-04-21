const {Schema,model} = require('mongoose');
require("../db")
const evaluacion = new Schema({
    Nombre: String,
    Nota:String,
})

module.exports = model("Evaluacion", evaluacion);