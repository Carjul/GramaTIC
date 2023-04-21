const express =require("express")
const cors = require("cors")
const morgan = require("morgan")
const router=require("./routes/index")
const app= express()
const PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use("/",router)

module.exports = {app,PORT}