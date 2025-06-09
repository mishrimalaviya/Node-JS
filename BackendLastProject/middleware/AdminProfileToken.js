const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    let token = req.header("Authorization")


    if (!token) {
        return res.status(404).json({ msg: "token not found" })
    }

    
    let decode = jwt.verify(token, "m")
   
    req.user = decode.users
    next()
}
module.exports = auth