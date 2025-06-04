const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1/LastProject")

// const db = mongoose.connection

// db.once("open",(err)=>{
//     err ? console.log(err) : console.log("Your Database is connected your Server")
// })

// module.exports = db  

mongoose.connect("mongodb+srv://mishri:mishri1410@cluster0.wxmsbp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("db connected")
})

module.exports = mongoose