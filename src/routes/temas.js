const {Router} = require('express');
const {getTemas, getTemasById, createTemas,deleteTemas,updateTemas} = require("../controllers/temas")

const routerTemas = Router();

routerTemas.get("/Temas",getTemas)

routerTemas.get("/Temas/:id",getTemasById)

routerTemas.post("/Temas",createTemas)

routerTemas.put("/Temas/:id",updateTemas)

routerTemas.delete("/Temas/:id",deleteTemas)

module.exports = routerTemas