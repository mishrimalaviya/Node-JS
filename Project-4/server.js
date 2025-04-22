const express = require("express")
const port = 5000
const app= express()
const db = require("./Config/db")
const schema = require("./model/schma")


app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))


app.get("/addbook",(req,res)=>{
    res.render("Form")
})
// to show the add from the form to mongodb 
app.post("/addbook",async(req,res)=>{
    console.log(req.body)
    await schema.create(req.body)
    .then(()=>{
        res.redirect("/")
    })
    
})
// to show the data from the mongodb

app.get("/",async(req,res)=>{
    await schema.find({})
    .then((books)=>{
        console.log(books)
        res.render("Home",{books})
    })
    
})

// delete the data 
app.get("/deletebook",async(req,res)=>{
    console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect("/")
    })
})
app.get("/editbook",async(req,res)=>{
    console.log(req.query.id)
    await schema.findById(req.query.id)
    .then((editinfo)=>{
        res.render("update",{editinfo})
    })
})

app.post("/updatebook",async(req,res)=>{
    // console.log(req.body);
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/");
    })
    
})
app.listen(port,(err)=>{
    err ? console.log(err): console.log("your server is run now on" , +port)
})