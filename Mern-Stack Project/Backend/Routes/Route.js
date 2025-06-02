const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Ctl")

route.post("/Register",ctl.Register)
route.post("/login",ctl.login)
// route.get("/addAdmin",ctl.addAdmin)


module.exports = route