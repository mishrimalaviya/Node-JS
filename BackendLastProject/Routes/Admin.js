const express = require("express")
const route = express.Router()
const ctl = require("../Controller/Admin")
const auth = require("../middleware/adminProfileToken")
const passwords = require("../middleware/AdminForgetPasswordToken")

route.post("/AdminRegister",ctl.AddAddminRegister)

route.post("/AdminLogin",ctl.AddAdminLogin)
route.get("/AdminProfile",auth,ctl.AdminProfile)

route.put("/ChangeAdminpassword",auth,ctl.ChangeAdminpassword)

route.post("/forgotpassword",ctl.forgotpassword)
route.put("/updatepassword",passwords,ctl.updatepassword)

route.post("/Manager/ManagerRegister",auth,ctl.ManagerRegister)

route.get("/ViewAllManager",auth,ctl.ViewAllManager)
route.put("/Manager/DeactiveManager/:id",auth,ctl.DeactiveManager)
route.get("/ViewAllEmployee",auth,ctl.ViewAllEmployee)
route.put("/Employee/DeactiveEmployee/:id",auth,ctl.DeactiveEmployee)





module.exports = route