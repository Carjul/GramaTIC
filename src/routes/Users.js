const { Router } = require('express');
const { getUser,getUserById,createUser,updateUser,deleteUser } = require('../controllers/User.js');
/* const Nivel = require("../models/Niveles.js");
const Evaluacion = require("../models/Evalucion.js");
const Actividad = require("../models/actividad.js");
const Temas = require("../models/temas.js"); */
const router = Router();


router.get('/usuarios', getUser)

router.get('/usuarios/:id',getUserById)

router.post('/usuarios', createUser)

router.put('/usuarios/:id', updateUser )

router.delete('/usuarios/:id',  deleteUser)
 
module.exports = router;