const schema = require("../model/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mailer = require("../middleware/mailer")

// 14. Employee Login

module.exports.EmployeLogin = async (req, res) => {
    console.log(req.body)
    let user = await schema.findOne({ email: req.body.email, role: "employee" })
    if (!user) {
        res.status(404).json({ msg: "employee user is not found" })

    }

    if (await bcrypt.compare(req.body.password, user.password)) {
        let token = jwt.sign({ user }, "employee", { expiresIn: "1h" })
        console.log(token)
        res.status(202).json({ msg: "Your manager is login by admin", data: user, token: token })
    }
}

// 15. Profile (Show Employee details) (Employee Token)  

module.exports.EmployeeProfile = async (req, res) => {
    console.log(req.user.email)
    let user = await schema.findOne({ email: req.user.email })
    if (!user) {
        return res.status(404).json({ msg: "user not Found", code: 300 })
    }

    res.status(202).json({ msg: "manager detail", da: user })
}

// 16. Change Password (Employee Token)

module.exports.ChangeEmployeePassword = async (req, res) => {
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

// 17. Forgot Password (No Token)

module.exports.ForgotEmployeePassword = async (req, res) => {
    console.log(req.body)
    var user = await schema.findOne({ email: req.body.email })
    if (!user) {
        return res.status(404).json({ msg: "email not found" })
    }
    let OTP = Math.floor(Math.random() * 1000 + 4000)
    console.log(OTP)

    mailer.sendotp(user.email, OTP)

    let token = jwt.sign({ email: user.email, OTP }, "employeespass", { expiresIn: "20m" })
    console.log(token)
}

module.exports.UpdateEmployeePassword =async(req,res)=>{
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



