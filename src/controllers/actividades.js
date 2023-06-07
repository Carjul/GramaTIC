 const Actividad = require("../models/actividad.js");



const getActividad=async(req,res)=>{
try {
    let actividades= await Actividad.find()
    res.json(actividades)
} catch (error) {
    console.log(error)
}
}
const getActividadById=async(req,res)=>{
try {
    let actividades = await Actividad.findById(req.params.id)
    res.json(actividades)
} catch (error) {
    console.log(error)
}
}
const createActividad=async(req,res)=>{
try {
    await Actividad.create(req.body)
     res.json({ status: 'Actividad creada' })
} catch (error) {
    console.log(error)
}
}
const updateActividad=async(req,res)=>{
try{
    const {id} = req.params
    await Actividad.findByIdAndUpdate(id, req.body)
    res.json({ status: 'Actividad actualizada' })
}catch(error){
    console.log(error)
}
}
const deleteActividad=async(req,res)=>{
try{
    const {id} = req.params
    await Actividad.findByIdAndDelete(id)
    res.json({ status: 'Actividad eliminada' })
}catch(error){
    console.log(error)
}
}

module.exports={getActividad,getActividadById,createActividad,updateActividad,deleteActividad}