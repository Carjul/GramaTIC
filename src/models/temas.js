const {Schema,model} = require('mongoose');
require("../db")
const tema = new Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    nombre: String,
})

module.exports = model("Temas", tema);