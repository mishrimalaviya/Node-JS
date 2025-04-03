
//  this task is like server side(index.js) thi data jyare client side(index.ejs) send karvo hoi tyare we use res okay ne aama obj banse static server side par ne client side ma show thase aa data okay !! 
// nd now on the day-3 we are going to do client side mathi data lidho dynamic ne aa server side ma send kariyo post thi ne aana par show kariyu ne id ne delete
let express = require("express")
let port = 3019

let students = [
    {
        id: "1",
        name: "mishri",
        surname: "malaviya"
    } ,
    {
        id:"2",
        name:"mishti",
        surname:"malaviya"
    }
]
let app = express()

app.use(express.urlencoded({extended:true})) // vache gitches n aave ne aana mate che jyare client side mathi data aave server side tyare 

app.set("view engine", "ejs")  // ejs ne sathe connect karvu hoi tyare we should have to write this line 

app.get("/", (req, res) => {
    // res.write(`Your server ${port} is successfully run now !!`)
    res.render("index",{students})  // aa index ni sathe connect thai che 
    // res.end()
})

app.post("/addvalue",(req,res)=>{
    console.log(req.body)
    req.body.id = students.length + 1
    students.push(req.body)
    res.redirect("/")
})

app.get("/deletedata",(req,res)=>{
    console.log(req.query.id)
    let newdata = students.filter((el,i)=>{
        if(el.id != req.query.id)
        {
            return el
        }
    })

    students = newdata
    res.redirect("/")
})

app.listen(port, (err) => {
    err ? console.log(`sorry your server ${port} as an error`) : console.log(`Your server ${port} is successfully run now !!`)
})   // ee terminal ma check karse ke sever succesfully run che ke ny 



