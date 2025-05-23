const mongoose = require("mongoose")
const schema = mongoose.Schema({
    Productname :{
        type : String,
        require : true
    },
    price :{
        type : String,
        require : true
    },
    productId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subcategory",
        require : true
    },
    image :{
        type : String,
        require : true
    }
})

const productschema = mongoose.model("product",schema)
module .exports = productschema