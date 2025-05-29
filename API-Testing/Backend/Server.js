const express = require("express")
const port = 2001 
const app = express()
const db = require("./Config/db")
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/",require("./Route/routes"))


app.listen(port , (err)=>{
    err ? console.log("err"  + err) : console.log("your server is created") 
})