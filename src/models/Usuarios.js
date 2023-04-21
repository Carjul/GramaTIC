const {Schema,model} = require('mongoose');
require("../db")
const usuarios = new Schema({
    Nombres: String,
    Email: String,
    Password: String,
    Estado:Boolean,
    RolId:String
})

module.exports = model("Usuarios", usuarios);