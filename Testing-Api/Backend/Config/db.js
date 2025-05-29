const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Testing-Api")

let db = mongoose.connection
db.once("open",(err)=>{
    err ? console.log(err) : console.log("Database is connected")
})

module.exports = db