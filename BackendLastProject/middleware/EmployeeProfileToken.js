const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    let token = req.header("Authorization")

    if (!token) {
        return res.status(404).json({ msg: "manager token not found" })
    }

    let decode = jwt.verify(token, "employee")
    req.user = decode.user
    console.log(decode)
    next()
}

module.exports = auth