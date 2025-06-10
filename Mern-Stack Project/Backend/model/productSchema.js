const mongoose = require("mongoose")
const schema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const firstschema = mongoose.model("Product", schema)
module.exports = firstschema
