const mongoose = require("mongoose")
const { type } = require("os")
const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    author : {
        type : String,
        required : true
    },

    price :{
        type : Number,
        required : true
    }
})

let fschema = mongoose.model("book",schema)

module.exports = fschema