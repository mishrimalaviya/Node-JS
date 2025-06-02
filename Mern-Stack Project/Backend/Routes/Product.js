const express = require("express")
const route = express.Router()
const ctl = require("../Controller/product")

route.post("/",ctl.ProductForm)
route.get("/ShowData",ctl.ShowData)
route.delete("/Delete",ctl.Delete)
route.put("/Editdata",ctl.Editdata)
module.exports = route