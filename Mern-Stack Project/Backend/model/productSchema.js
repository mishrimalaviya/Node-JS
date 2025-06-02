const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    title :{
        type : String,
        required : true
    },
    price :{
        type : String,
        required : true
    }
})

const firstschema = mongoose.model("Product",schema)
module.exports = firstschema
