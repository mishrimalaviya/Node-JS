const express = require("express")
const route = express.Router()
const ctl = require("../Controller/product")
const multer = require("../middleware/multer")

route.get("/pageproduct",ctl.productpage)
route.post("/addproduct",multer,ctl.addproduct)
route.get("/viewproduct",ctl.viewproduct)

module.exports = route