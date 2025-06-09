const jwt = require("jsonwebtoken")
const passwords = (req, res, next) => {
    let token = req.header("Authorization")


    if (!token) {
        return res.status(404).json({ msg: "token not found" })
    }

    
    let decode = jwt.verify(token, "pass")
    console.log(decode)
    req.user = decode
    next()
}
module.exports = passwords