const {Schema,model} = require('mongoose');
require("../db")
const usuarios = new Schema({
    Nombres: String,
    Email: String,
    Rol:String,
    Password: String,
    niveles: {
        Alto: Boolean,
        Medio: Boolean,
        Bajo: Boolean,
    },
})

module.exports = model("Usuarios", usuarios);