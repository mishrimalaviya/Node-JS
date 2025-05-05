const express = require("express")
const port = 3005
const app = express()
const path = require("path")
const db = require("./Config/db")
const cookie = require("cookie-parser")

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"Public")))
app.set("view engine" , "ejs")
app.use(cookie())
app.use("/",require("./Routes/route"))
app.listen(port,(err)=>{
    err ? console.log("err" +err) : console.log("your server is create on the port " +port)
})