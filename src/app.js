const express =require("express")
const cors = require("cors")
const morgan = require("morgan")
const RutaUsers=require("./routes/Users")
const RutaNivel=require("./routes/nivels")
const app= express()
const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/",RutaUsers)
app.use("/",RutaNivel)
app.get('/', (req, res) => {
    res.json({ msg: "Bienvenido a la API de la plataforma de aprendizaje de la Gramatic" })
});
module.exports = {app,PORT}