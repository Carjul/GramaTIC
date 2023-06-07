const Evaluacion = require("../models/Evalucion.js");



const getEvaluacion=async(req,res)=>{
try {
    let Evaluaciones= await Evaluacion.find()
    res.json(Evaluaciones)
} catch (error) {
    console.log(error)
}
}
const getEvaluacionById=async(req,res)=>{
try {
    let Evaluaciones = await Evaluacion.findById(req.params.id)
    res.json(Evaluaciones)
} catch (error) {
    console.log(error)
}
}
const createEvaluacion=async(req,res)=>{
try {
    await Evaluacion.create(req.body)
     res.json({ status: 'Evaluacion creada' })
} catch (error) {
    console.log(error)
}
}
const updateEvaluacion=async(req,res)=>{
try{
    const {id} = req.params
    await Evaluacion.findByIdAndUpdate(id, req.body)
    res.json({ status: 'Evaluacion actualizada' })
}catch(error){
    console.log(error)
}
}
const deleteEvaluacion=async(req,res)=>{
try{
    const {id} = req.params
    await Evaluacion.findByIdAndDelete(id)
    res.json({ status: 'Evaluacion eliminada' })
}catch(error){
    console.log(error)
}
}

module.exports={getEvaluacion,getEvaluacionById,createEvaluacion,updateEvaluacion,deleteEvaluacion}