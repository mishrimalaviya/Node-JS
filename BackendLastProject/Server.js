const express = require("express")
const port = 4001
const app = express()
const db = require("./Config/db")
const cors = require("cors")
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, "uploads")))  //multer 
app.use("/admin",require("./Routes/Admin"))
app.use("/manager",require("./Routes/Manager"))
app.use("/employee",require("./Routes/Employee"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Your Server is created on the port" +port) 
})