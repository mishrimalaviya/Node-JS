const jwt = require("jsonwebtoken")
const mpassword = (req,res,next)=>{
    let token = req.header("Authorization")

    if(!token)
    {
        return res.status(404).json({ msg: "token not found" })
    }

    let decode = jwt.verify(token ,"mangerpass")
    console.log(decode)
    req.user = decode
    next()
}

module.exports = mpassword