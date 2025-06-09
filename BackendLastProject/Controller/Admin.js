const schema = require("../model/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mailer = require("../middleware/mailer")

// 1. Admin Registration (username, email, phone, password, role) // done

module.exports.AddAddminRegister = async (req, res) => {
    console.log(req.body)
    let user = await schema.findOne({ email: req.body.email, role: "admin" })

    if (user) {
        return res.status(200).json({ msg: "user already login" })
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)
    req.body.role = "admin"
    await schema.create(req.body)
        .then((re) => {
            // console.log(re)
            return res.status(200).json({ msg: "user login successfully", users: re })
        })

}
// 2. Admin Login (username or email & password) 

module.exports.AddAdminLogin = async (req, res) => {
    let users = await schema.findOne({ email: req.body.email })

    if (!users) {
        return res.status(404).json({ msg: "user not Found", code: 300 })
    }

    if (await bcrypt.compare(req.body.password, users.password)) {
        let token = jwt.sign({ users }, "m", { expiresIn: "1h" })
        return res.status(200).json({ msg: "You Successfully login", code: 200, token: token, data: users })
    }
    else {
        return res.status(404).json({ msg: "Your pasword is wrong", code: 301 })
    }

}

// 3. Profile (show own details) (Admin Token) 

module.exports.AdminProfile = async (req, res) => {

    var profileUser = await schema.findOne({ email: req.user.email })

    if (!profileUser) {
        return res.status(404).json({ msg: "user not Found", code: 300 })
    }

    return res.status(200).json({ msg: "Admin Details", data: profileUser })
}


// 4. Change password (Admin Token)  

module.exports.ChangeAdminpassword = async (req, res) => {

    if (await bcrypt.compare(req.body.oldpassword, req.user.password)) {
        if (req.body.oldpassword != req.body.newpassword) {
            if (req.body.newpassword == req.body.confirmpassword) {

                var hashpassword = await bcrypt.hash(req.body.confirmpassword, 10)
                console.log(hashpassword)
                await schema.findByIdAndUpdate(req.user._id, { password: hashpassword })
                    .then(() => {
                        return res.status(202).json({ msg: "your password is changed" })

                    })
            }
        }
    }
}
// 5. Forgot Password (no Token)  

module.exports.forgotpassword = async (req, res) => {
    console.log(req.body)
    let admin = await schema.findOne({ email: req.body.email })
    console.log(admin)
    if (!admin) {
        return res.status(404).json({ msg: "email not found" })
    }
    let OTP = Math.floor(Math.random() * 1000 + 4000)
    console.log(OTP)
    mailer.sendotp(admin.email, OTP)

    let token = jwt.sign({ email: admin.email, otp: OTP }, "pass", { expiresIn: "5m" })
    console.log(token)
}

module.exports.updatepassword = async (req, res) => {

    let admin = req.user.email
    let otp = req.user.otp
    console.log(admin)
    console.log(otp)

    if (req.body.otp == otp) {
        if (req.body.newpassword == req.body.confirmpassword) {
            var hashpassword = await bcrypt.hash(req.body.confirmpassword, 10)
            console.log(hashpassword)

            await schema.findOneAndUpdate({ email: admin }, { password: hashpassword })
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

// 6. Add manager detail (send email and passed details like password, Portal Link) (Admin Token) 

module.exports.ManagerRegister = async (req, res) => {

    let manager = await schema.findOne({ email: req.body.email, role: "manager" })

    if (manager) {
        return res.status(404).json({ msg: "manger user already login" })

    }

    req.body.password = await bcrypt.hash(req.body.password, 10)
    req.body.adminId = req.user._id;
    req.body.role = "manager"
    await schema.create(req.body)
        .then((da) => {
            console.log(da)
            mailer.sendmanagerdetail(da.email, da.password)
            res.status(202).json({ msg: "Your login successful as a manger", data: da })
        })

}

// 11. All managers data show (Admin Token)  

module.exports.ViewAllManager = async (req, res) => {
    console.log(req.user.role)
    if (req.user.role != "admin") {
        return res.status(403).json({ msg: "Only admin can view manager." });
    }

    await schema.find({ role: "manager" })
        .then((da) => {
            res.status(202).json({ msg: "Lists of all managers", data: da })
        })


}
// 12. Manager Delete (Active / Deactive)  

module.exports.DeactiveManager = async (req, res) => {
    console.log(req.user)
    console.log(req.params.id)
    var id = req.params.id
    var user = await schema.findById(id)
    console.log(user)

    if (!user || user.role != "manager") {
        return res.status(404).json({ msg: "Manager not found" });
    }

    var updatestatus = user.status == "Active" ? "Deactive" : "Active"
    console.log(updatestatus)

    await schema.findByIdAndUpdate(id, { status: updatestatus })
        .then((da) => {
            return res.status(200).json({
                msg: `Manager has been ${updatestatus == "Active" ? "Activate" : "Deactivate"}`, updatestatus: da
            });
        })

}

// 19. View All Employee (Admin Token)

module.exports.ViewAllEmployee = async (req, res) => {
    console.log(req.user.role)
    if (req.user.role != "admin") {
        return res.status(403).json({ msg: "admin can view employee." });
    }

    await schema.find({ role: "employee" })
        .then((da) => {
            res.status(202).json({ msg: "Lists of all employees", data: da })
        })

}

// 20. Employee Delete (Active/ Deactive)   

module.exports.DeactiveEmployee = async(req, res) => {
    console.log(req.user)
    console.log(req.params.id)
    var id = req.params.id
    var user = await schema.findById(id)
    console.log(user)

    if (!user || user.role != "employee") {
        return res.status(404).json({ msg: "employee not found" });
    }

    var updatestatus = user.status == "Active" ? "Deactive" : "Active"
    console.log(updatestatus)

    await schema.findByIdAndUpdate(id, { status: updatestatus })
        .then((da) => {
            return res.status(200).json({
                msg: `employee has been ${updatestatus == "Active" ? "Activate" : "Deactivate"}`, updatestatus: da
            });
        })
}


