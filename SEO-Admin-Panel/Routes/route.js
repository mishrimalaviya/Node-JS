const express = require("express")
const route = express.Router()
const ctl = require("../Controller/ctl")

route.get("/",ctl.login)
route.get("/dashboard",ctl.dashboard)
route.get("/Form", ctl.Form)
route.get("/table",ctl.table)
route.post("/addData",ctl.addData)
route.get("/delete",ctl.deleteadmin)
route.get("/edit",ctl.editadmin)
route.post("/UpdateData",ctl.updateAdmin)
route.post("/login",ctl.auth)
route.get("/logout",ctl.logout)

module.exports = route