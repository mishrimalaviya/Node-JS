const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    let token = req.header("Authorization")

    if (!token) {
        return res.status(404).json({ msg: "manager token not found" })
    }

    let decode = jwt.verify(token, "manager")
    req.user = decode.admin
    console.log(decode)
    next()
}

module.exports = auth