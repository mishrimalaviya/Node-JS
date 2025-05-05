const mongoose = require("mongoose")

const schema = mongoose.Schema({

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