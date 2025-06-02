const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/LastProject")

const db = mongoose.connection

db.once("open",(err)=>{
    err ? console.log(err) : console.log("Your Database is connected your Server")
})

module.exports = db  