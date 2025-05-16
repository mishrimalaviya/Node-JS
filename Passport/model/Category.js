const mongoose = require("mongoose")
const schema = mongoose.Schema({
    image :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true
    }
})

const sch = mongoose.model("Category",schema)

module.exports = sch
