const mongoose = require('mongoose');

require("../db")

const Schema = mongoose.Schema;

const nivelSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  temas: [{
    type: Schema.Types.Number,
    ref: 'Temas'
  }]
});

const Nivel = mongoose.model('Nivel', nivelSchema);

module.exports = Nivel;
