const Nivel = require("../models/Niveles.js");

const getNivel = async (req, res) => {
    const niveles = await Nivel.find();
    res.json(niveles)
}

const getNivelById = async (req, res) => {
    const niveles = await Nivel.findById(req.params.id);
    res.json(niveles)
}

const createNivel = async (req, res) => {
    const {id, nombre, temas } = req.body;
    const newNivel = { id, nombre, temas };
    await Nivel.create(newNivel);
    res.json({ status: 'Nivel creado' })

}
const updateNivel = async (req, res) => {
    const { id } = req.params;
    const { nombre, temas } = req.body;
    const newNivel = { nombre, temas };
    Nivel.findByIdAndUpdate(id, newNivel);
}

const deleteNivel = async (req, res) => {
    const { id } = req.params;
    await Nivel.findByIdAndRemove(id);
    res.json({ status: 'Nivel eliminado' })
}

module.exports = { getNivel, getNivelById, createNivel, updateNivel, deleteNivel }