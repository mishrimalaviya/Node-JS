const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "manager", "employee"],
        required: true,
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    image: {
        type: String
    }
})

const adminschema = mongoose.model("admin", schema)
module.exports = adminschema