const {Schema,model} = require('mongoose');
require("../db")
const nivel = new Schema({
    Nombre: String,
    Estado:Boolean,

})

module.exports = model("Nivel", nivel);