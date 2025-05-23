const mongoose = require("mongoose")
const schema = mongoose.Schema({
    subname :{
        type : String,
        require : true
    },
    categoryId :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Category",
    }
})

const sche = mongoose.model("Subcategory",schema)

module.exports = sche