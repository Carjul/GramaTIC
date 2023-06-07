const mongoose = require('mongoose');
require("../db")
const Schema = mongoose.Schema;

const evaluacionSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  id_tema: {
    type: Schema.Types.Number,
    ref: 'Temas',
    required: true
  },
  nombre: {
    type: String,
    required: true
  }
});

const Evaluacion = mongoose.model('Evaluacion', evaluacionSchema);

module.exports = Evaluacion;
