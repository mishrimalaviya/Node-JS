const express = require("express")
const port = 1724
const app = express()
let student =[
    {
        id :"1",
        name :"mishri",
        surname :"malaviya"
    },
    {
        id:"2",
        name : "mishti",
        surname :"malaviya"
    }
]


app.set("view engine" ,"ejs")
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.render("client" ,{student})
    // res.write("done")
    // res.end()
})
app.post("/addata",(req,res)=>{
    console.log(req.body)
    req.body.id = student.length + 1
    console.log(req.body.id)
    student.push(req.body)
    res.redirect("/")
})

app.get("/deletedata",(req,res)=>{
    console.log(req.query.id)
    student = student.filter((el,i)=>{
        if(el.id != req.query.id)
        {
            return el
        }
    })
    res.redirect("/")
})
app.get("/editdata/:id",(req,res)=>{
    console.log(req.params.id)
    var newda = student.find((el,i)=>{
        if(el.id == req.params.id)
        {
            return el
        }
    }) 

    console.log(newda)
    res.render("Edit",{newda})
})

app.post("/update",(req,res)=>{
    console.log(req.body)
     student.forEach((el,i)=>{
        if(el.id == req.body.id)
        {
            el.name = req.body.name
            el.surname = req.body.surname
        }
    })
    res.redirect("/")
})
app.listen(port,(err)=>{
    err ? console.log("bro err" +port) : console.log("successfully done " +port)
})