const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/Movies")

let db = mongoose.connection

db.once("open",(err)=>{
    err ? console.log(err) : console.log("Your Database is connected to your server ");
    ;
})

module.exports = db