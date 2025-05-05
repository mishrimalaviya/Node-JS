const express = require("express")
const  ctl = require("../Controller/ctl")
const route = express.Router()

route.get("/",ctl.login)
route.get("/dashboard",ctl.dashboard)
route.get("/addadminpage",ctl.addadminpage)
route.get("/viewadminpage",ctl.viewadminpage)
route.post("/addata",ctl.addatas)
route.get("/deletedata",ctl.delete)
route.get("/edit",ctl.edits)
route.post("/update",ctl.update)
route.post("/addlogin",ctl.addlogin)

module.exports = route