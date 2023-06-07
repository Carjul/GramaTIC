const {Router} = require('express');
const {getEvaluacion, getEvaluacionById, createEvaluacion,deleteEvaluacion,updateEvaluacion} = require("../controllers/evaluacion")

const routerEvaluacion = Router();

routerEvaluacion.get("/Evaluacion",getEvaluacion)

routerEvaluacion.get("/Evaluacion/:id",getEvaluacionById)

routerEvaluacion.post("/Evaluacion",createEvaluacion)

routerEvaluacion.put("/Evaluacion/:id",updateEvaluacion)

routerEvaluacion.delete("/Evaluacion/:id",deleteEvaluacion)

module.exports = routerEvaluacion