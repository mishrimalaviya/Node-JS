let express = require("express")
let port = 3005

let app = express()
let tasks =[
    {
        srno:"1",
        taskname :"dhanu sathe vaat",
        prop :"high"
    },
    {
        srno:"2",
        taskname :"project",
        prop :"high"
    }
]
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.post("/addtask",(req,res)=>{
    console.log(req.body)
    req.body.srno = (tasks.length + 1).toString();
    tasks.push(req.body)
    res.redirect("/")
})

app.get("/deletetask",(req,res)=>{
    console.log(req.query.srno)
    let del = tasks.filter((el,i)=>{
        if(el.srno != req.query.srno)
        {
            return el
        }
    })
    // console.log(del)
    tasks = del
    res.redirect("/")
})

app.get("/editask/:id",(req,res)=>{
    console.log(req.params.id)
    let ed = tasks.find((el,i)=>{
        if(el.srno == req.params.id)
        {
            return el
        }
    })

    res.render("edit",{ed})
})

app.post("/updatedata",(req,res)=>{
    tasks.forEach((el,i)=>{
        if(el.srno == req.body.srno)
        {
            el.taskname = req.body.taskname,
            el.prop = req.body.prop
        }
    })

    res.redirect("/")

})
app.get("/",(req,res)=>{
    // res.write("done!!")
    // res.end()
    res.render("task",{tasks})
})
app.listen(port,(err)=>{
    err ? console.log(`Sorry to say !! but your server ${port} can't work.`) : console.log(`Successfully your server ${port} is working now !!`)
})