const express = require("express")
const route = express.Router()
const ctl = require("../Controller/ctl")
const passport = require("../middleware/passport")

route.get("/",ctl.login)
route.get("/dashboard",passport.Auth,ctl.dashboard)
route.get("/Form",passport.Auth, ctl.Form)
route.get("/table",passport.Auth,ctl.table)
route.post("/addData",passport.Auth,ctl.addData)
route.get("/delete",passport.Auth,ctl.deleteadmin)
route.get("/edit",passport.Auth,ctl.editadmin)
route.post("/UpdateData",passport.Auth,ctl.updateAdmin)
route.post("/login",passport.authenticate("local",{failureRedirect:"/"}),ctl.auth)
route.get("/logout",ctl.logout)

module.exports = route