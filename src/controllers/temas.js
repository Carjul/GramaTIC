const Temas = require('../models/temas');

const getTemas = async (req, res) => {
        try {
            let temas= await Temas.find()
            res.json(temas)
        } catch (error) {
            console.log(error)
        }
    }


const getTemasById = async (req, res) => {
    try {
        let temas = await Temas.findById(req.params.id)
        res.json(temas)
    } catch (error) {
        console.log(error)
    }

}

const createTemas = async (req, res) => {
    try {
       await Temas.create(req.body)
        res.json({ status: 'Tema creado' })
    } catch (error) {
        console.log(error)
    }

}

const updateTemas = async (req, res) => {
    try{
        const {id} = req.params
        await Temas.findByIdAndUpdate(id, req.body)
        res.json({ status: 'Tema actualizado' })
    }catch (error){
        console.log(error)
    }
}

const deleteTemas = async (req, res) => {
    try{
        const {id} = req.params
        await Temas.findByIdAndDelete(id)
        res.json({ status: 'Tema eliminado' })
    }catch (error){
        console.log(error)
    }
}

module.exports = { getTemas, getTemasById, createTemas, updateTemas , deleteTemas}