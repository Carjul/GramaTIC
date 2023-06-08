const mongoose = require('mongoose');

require("../db")
const Schema = mongoose.Schema;

const actividadSchema = new Schema({
  _id: {
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

const Actividad = mongoose.model('Actividad', actividadSchema);

module.exports = Actividad;
