const mongoose = require('mongoose');
 
require("../db")
const roles = new mongoose.Schema({
    Nombre: String,
})
 
module.exports = mongoose.model("Roles", roles);