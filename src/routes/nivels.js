const {Router} = require('express');
const {getNivel, getNivelById, createNivel, updateNivel, deleteNivel} = require('../controllers/Nivel.js');

const rutaNivel = Router();

rutaNivel.get('/Niveles',getNivel)

rutaNivel.get('/Niveles/:id',getNivelById)

rutaNivel.post('/Niveles',createNivel)

rutaNivel.put('/Niveles/:id',updateNivel)

rutaNivel.delete('/Niveles/:id',deleteNivel)

module.exports = rutaNivel;
