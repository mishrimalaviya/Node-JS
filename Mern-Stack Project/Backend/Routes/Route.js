const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Ctl")
const auth = require("../middleware/auth")

route.post("/Register",ctl.Register)
route.post("/login",ctl.login)
route.get("/addAdmin",auth,ctl.addAdmin)
route.post("/ChangePassword",auth,ctl.ChangePassword)


module.exports = route