const express = require("express")
const port = 4001
const app = express()
const db = require("./Config/db")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/",require("./Routes/Route"))
app.use("/ProductForm",require("./Routes/Product"))



app.listen(port,(err)=>{
   err ? console.log("err" +err) : console.log("Your Server is created on the port " +port)
})