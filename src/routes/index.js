const { Router } = require('express');
const Roles = require("../models/Roles.js");
const Usuarios = require("../models/Usuarios.js");
const Nivel = require("../models/Niveles.js");
const EvaluacioNivel = require("../models/EvaluacioNiveles.js");
const Evaluacion = require("../models/Evaluciones.js");
const router = Router();



router.post("/Usuarios", async (req, res) => {
    const { Nombres, Email, Password, Estado, RolId } = req.body
    const newUsuario = await Usuarios.create({ Nombres, Email, Password, Estado, RolId })
    console.log(newUsuario)
    res.json({ msg: "Usuario saved" })
})

router.get("/Usuarios", async (req, res) => {
    const usuarios = await Usuarios.find()
    res.json(usuarios)
})
router.get("/Usuarios/:id", async (req, res) => {
    const { id } = req.params
    const usuario = await Usuarios.findById(id)
    res.json(usuario)

})
router.put("/Usuarios/:id", async (req, res) => {
    const { id } = req.params
    const { Nombres, Email, Password, Estado, RolId } = req.body
    await Usuarios.findByIdAndUpdate(id, { Nombres, Email, Password, Estado, RolId })
    res.json({ msg: "Usuario updated" })
})
router.delete("/Usuarios/:id", async (req, res) => {
    const { id } = req.params
    await Usuarios.findByIdAndDelete(id)
    res.json({ msg: "Usuario deleted" })
})

router.post("/Roles", async (req, res) => {
    const { Nombre } = req.body
    const newRol = await Roles.create({ Nombre })
    console.log(newRol)
    res.json({ msg: "Rol saved" })

})
router.get("/Roles", async (req, res) => {
    const roles = await Roles.find()
    res.json(roles)
})
router.get("/Roles/:id", async (req, res) => {
    const { id } = req.params
    const rol = await Roles.findById(id)
    res.json(rol)
})
router.put("/Roles/:id", async (req, res) => {
    const { id } = req.params
    const { Nombre } = req.body
    await Roles.findByIdAndUpdate(id, { Nombre })
    res.json({ msg: "Rol updated" })
})
router.delete("/Roles/:id", async (req, res) => {
    const { id } = req.params
    await Roles.findByIdAndDelete(id)
    res.json({ msg: "Rol deleted" })
})

router.get("/Nivel", async (req, res) => {
    const nivel = await Nivel.find()
    res.json(nivel)
})

router.post("/Nivel", async (req, res) => {
    const { Nombre, Estado } = req.body
    await Nivel.create({ Nombre, Estado })
    res.json({ msg: "Nivel saved" })
})

router.get("/Nivel/:id", async (req, res) => {
    const { id } = req.params
    const niveles = await Nivel.findById(id)
    res.json(niveles)

})

router.put("/Nivel/:id", async (req, res) => {  
    const { id } = req.params
    const { Nombre, Estado } = req.body
    await Nivel.findByIdAndUpdate(id, { Nombre, Estado })
    res.json({ msg: "Nivel updated" })
})

router.delete("/Nivel/:id", async (req, res) => {
    const { id } = req.params
    await Nivel.findByIdAndDelete(id)
    res.json({ msg: "Nivel deleted" })
})

router.get("/Evaluacion", async (req, res) => {
    const evaluacion = await Evaluacion.find()
    res.json(evaluacion)
})

router.post("/Evaluacion", async (req, res) => {
    const { Nombre, Nota } = req.body
    await Evaluacion.create({ Nombre, Nota })
    res.json({ msg: "Evaluacion saved" })
})

router.get("/Evaluacion/:id", async (req, res) => {
    const { id } = req.params
    const evaluacion =await Evaluacion.findById(id)
    res.json(evaluacion)
})

router.put("/Evaluacion/:id", async (req, res) => {
    const { id } = req.params
    const { Nombre, Nota } = req.body
    await Evaluacion.findByIdAndUpdate(id, { Nombre, Nota })
    res.json({ msg: "Evaluacion updated" })
})

router.delete("/Evaluacion/:id", async (req, res) => {
    const { id } = req.params
    await Evaluacion.findByIdAndDelete(id)
    res.json({ msg: "Evaluacion deleted" })
})

router.get("/EvaluacioNivel", async (req, res) => {
    const evaluacion = await EvaluacioNivel.find()
    res.json(evaluacion)
})

router.post("/EvaluacioNivel", async (req, res) => {
    const { NivelId, EvaluacionId,UsuarioId} = req.body
    await EvaluacioNivel.create({NivelId, EvaluacionId,UsuarioId})
    res.json({ msg: "Evaluacion saved" })
})

router.get("/EvaluacioNivel/:UsuarioId", async (req, res) => {
    const { UsuarioId} = req.params
    const evaluacion =await EvaluacioNivel.find({UsuarioId})
    res.json(evaluacion)
})

router.put("/EvaluacioNivel/:id", async (req, res) => {
    const { id } = req.params
    const { NivelId, EvaluacionId,UsuarioId } = req.body
    await EvaluacioNivel.findByIdAndUpdate(id, { NivelId, EvaluacionId,UsuarioId })
    res.json({ msg: "Evaluacion updated" })
})

router.delete("/EvaluacioNivel/:id", async (req, res) => {
    const { id } = req.params
    await EvaluacioNivel.findByIdAndDelete(id)
    res.json({ msg: "Evaluacion deleted" })
})


module.exports = router;