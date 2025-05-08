const mongoose = require("mongoose")

const schema = mongoose.Schema({
    image:{
        type : String,
        required : true,    
    },
    username :{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required :true
    }
})

const sch = mongoose.model("passport",schema)

module.exports = sch