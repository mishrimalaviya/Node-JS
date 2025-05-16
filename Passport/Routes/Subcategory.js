const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Subcate")


route.get("/addsubCat",ctl.addsubcate)
route.post("/addSubCatedata",ctl.addSubCatedata)
route.get("/viewsubcat",ctl.viewsubcat)
module.exports= route