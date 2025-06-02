const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name :{
        type :String,
        required : true
    },
    email :{
        type : String,
        required:true
    },
    password :{
        type : String,
        required : true
    }

})
exports.schema = schema
const firstschema = mongoose.model("Project",schema)
module.exports = firstschema