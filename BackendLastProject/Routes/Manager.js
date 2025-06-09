const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Manager")
const managertoken = require("../middleware/ManagerProfileToken")
const Forgotpassword = require("../middleware/ManagerForgotPasswordToken")
const multer = require("../middleware/multer")


route.post("/ManagerLogin",ctl.ManagerLogin)
route.get("/ManageProfile",managertoken,ctl.ManageProfile)

route.put("/ChangeManagerPassword",managertoken,ctl.ChangeManagerPassword)

route.post("/Forgotpassword",ctl.Forgotpassword)
route.put("/UpdateManagerpassword",Forgotpassword,ctl.UpdateManagerpassword)

route.post("/employee/EmployeeRegister",managertoken,multer,ctl.EmployeeRegister)

route.get("/Manager/ViewAllEmployee",managertoken,ctl.ViewAllEmployee)


module.exports = route