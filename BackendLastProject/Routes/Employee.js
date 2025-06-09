const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Employee")
const employeprofile = require("../middleware/EmployeeProfileToken")
const forgetpassword = require("../middleware/EmployeeForgetPassword")

route.post("/EmployeLogin", ctl.EmployeLogin)
route.get("/EmployeeProfile",employeprofile, ctl.EmployeeProfile)
route.put("/ChangeEmployeePassword",employeprofile,ctl.ChangeEmployeePassword)
route.post("/ForgotEmployeePassword",ctl.ForgotEmployeePassword)
route.put("/UpdateEmployeePassword",forgetpassword,ctl.UpdateEmployeePassword)

module.exports = route