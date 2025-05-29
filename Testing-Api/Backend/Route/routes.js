const express = require("express")
const route = express.Router()
const ctl = require("../Controller/ctl")


route.post("/addData",ctl.addData)
route.get("/showData",ctl.showData)
route.delete("/delete",ctl.delete)
route.put("/edit",ctl.edit)

module.exports = route