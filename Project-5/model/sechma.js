const mongoose = require("mongoose")
const schema = mongoose.Schema({
    urls : {
        type :String,
        required : true
    },
    name : {
        type :String,
        required : true
    },
    categ : {
        type :String,
        required : true
    }
})

const movieschema = mongoose.model("movie",schema)
module.exports = movieschema