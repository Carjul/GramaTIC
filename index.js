require("dotenv").config()
const {app,PORT}=require("./src/app")
require("./src/db.js")
app.listen(PORT,()=> console.log("server run on port:",PORT))