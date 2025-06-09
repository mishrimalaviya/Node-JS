const schema = require("../model/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mailer = require("../middleware/mailer")



// 7. Manager Login  

module.exports.ManagerLogin = async (req, res) => {
    console.log(req.body)
    let admin = await schema.findOne({ email: req.body.email, role: "manager" })
    console.log(admin)
    if (!admin) {
        res.status(404).json({ msg: "manager user is not found" })
    }

    if (await bcrypt.compare(req.body.password, admin.password)) {
        let token = jwt.sign({ admin }, "manager", { expiresIn: "1h" })
        console.log(token)
        res.status(202).json({ msg: "Your manager is login by admin", data: admin, token: token })
    }
}

// 8. Profile (show manager details)(Manager Token) 

module.exports.ManageProfile = async (req, res) => {
    console.log(req.user.email)
    let user = await schema.findOne({ email: req.user.email })
    if (!user) {
        return res.status(404).json({ msg: "user not Found", code: 300 })
    }

    res.status(202).json({ msg: "manager detail", da: user })
}

// 9. Change Password (Manager Token)

module.exports.ChangeManagerPassword = async (req, res) => {
    console.log(req.body)
    console.log(req.user.password)

    if (await bcrypt.compare(req.body.oldpassword, req.user.password)) {
        if (req.body.oldpassword != req.body.newpassword) {
            if (req.body.newpassword == req.body.confirmpassword) {
                var hashpassword = await bcrypt.hash(req.body.confirmpassword, 10)
                console.log(hashpassword)
                await schema.findByIdAndUpdate(req.user._id, { password: hashpassword })
                    .then(() => {
                        return res.status(202).json({ msg: "your manager password is changed" })
                    })
            }
        }
    }
}

// 10. Forgot Password (No Token) 

module.exports.Forgotpassword = async (req, res) => {
    console.log(req.body)
    var user = await schema.findOne({ email: req.body.email })
    if (!user) {
        return res.status(404).json({ msg: "email not found" })
    }
    let OTP = Math.floor(Math.random() * 1000 + 4000)
    console.log(OTP)
    mailer.sendotp(user.email, OTP)

    let token = jwt.sign({ email: user.email, OTP }, "mangerpass", { expiresIn: "20m" })
    console.log(token)

}

module.exports.UpdateManagerpassword = async (req, res) => {
    let user = req.user.email
    let otp = req.user.OTP
    console.log(req.body.newpassword)
    console.log(req.body.confirmpassword)
    if (req.body.otp == req.user.OTP) {
        if (req.body.newpassword == req.body.confirmpassword) {
            var hashpassword = await bcrypt.hash(req.body.confirmpassword, 10)
            console.log(hashpassword)
            await schema.findOneAndUpdate({ email: user }, { password: hashpassword })
                .then(() => {
                    return res.status(202).json({ msg: "your password is updated with the help of otp" })
                })
        }
        else {
            return res.status(404).json({ msg: "your password is not match to your confirm password" })
        }
    }
    else {
        return res.status(404).json({ msg: "Your otp is matched" })

    }


}


// 13. Add Employee by Managers (Registration - Username, email, Phone, password, image.ManagerId)
// (Send email to employee mail for password, portal link) (manager Token)


module.exports.EmployeeRegister = async (req, res) => {
    console.log(req.user)
    console.log(req.body)

    let users = await schema.findOne({ email: req.body.email, role: "employee" })

    if (users) {
        return res.status(404).json({ msg: "employee user already login" })
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)
    req.body.role = "employee"
    req.body.managerId = req.user._id
    req.body.image = req.file.path
    await schema.create(req.body)
        .then((da) => {
            mailer.sendEmployeedetail(da.email, da.password)
            return res.status(202).json({ msg: "your employee is registered by manager", data: da })

        })

}

// 18. View All Employees (Manager Token)

module.exports.ViewAllEmployee = async(req, res) => {
    console.log(req.user.role)
    if (req.user.role != "manager") {
        return res.status(403).json({ msg: "Only manager can view employees." });
    }

    await schema.find({ role: "employee" })
        .then((da) => {
            res.status(202).json({ msg: "Lists of all employees", data: da })
        })
}

