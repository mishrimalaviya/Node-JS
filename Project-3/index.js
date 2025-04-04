const express = require("express")
const port = 3000
const path = require("path")

const app = express()
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    // res.write("done!!")
    // res.end()
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/services",(req,res)=>{
    res.render("services")
})
app.get("/pricing",(req,res)=>{
    res.render("pricing")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/get-a-quote",(req,res)=>{
    res.render("get-a-quote")
})

app.listen(port, (err) => {
    err ? console.log(`Your server ${port} is not woorking !!`) : console.log(` Done !! your server ${port} is successfully run now `)
})