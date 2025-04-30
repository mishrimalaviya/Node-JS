const express = require("express")
const route = express.Router()
const ctl = require("../Controller/ctl")



route.get("/",ctl.homepage)
route.post("/addMovie",ctl.addMovie)
route.get("/deletemovie",ctl.delete)
route.get("/editmovie",ctl.edit)
route.post("/updatemovie",ctl.update)





module.exports = route


