const {Schema,model} = require('mongoose');
require("../db")
const evaluacionivel = new Schema({
    NivelId: String,
    EvaluacionId:String,
    UsuarioId:String,
})

module.exports = model("EvaluacioNivel", evaluacionivel);