const { Router } = require('express');
const { getActividad,getActividadById,createActividad,updateActividad,deleteActividad } = require('../controllers/actividades.js');
/* const Nivel = require("../models/Niveles.js");
const Evaluacion = require("../models/Evalucion.js");
const Actividad = require("../models/actividad.js");
const Temas = require("../models/temas.js"); */
const routerActividades = Router();


routerActividades.get('/Actividades', getActividad)

routerActividades.get('/Actividades/:id',getActividadById)

routerActividades.post('/Actividades', createActividad)

routerActividades.put('/Actividades/:id', updateActividad )

routerActividades.delete('/Actividades/:id',  deleteActividad)
 
module.exports =routerActividades