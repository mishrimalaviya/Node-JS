const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Cate")
const passport = require("../middleware/passport")
const multer = require("../middleware/multer2")

route.get("/addCat",passport.Auth,ctl.addcate)
route.post("/addCatedata",passport.Auth,multer,ctl.addcatedata)
route.get("/viewcat",passport.Auth,ctl.viewcate)

module.exports = route