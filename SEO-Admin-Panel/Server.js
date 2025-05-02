const express = require("express")
const port = 5000
const app = express()
const path = require("path")
const db = require("./Config/db")
const cookie = require("cookie-parser")


app.set("view engine" ,"ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"Public")))
app.use(cookie())
app.use("/",require("./Routes/route"))



app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Your server is created on the port " +port)
})