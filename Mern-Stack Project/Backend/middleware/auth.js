const jwt = require("jsonwebtoken")
// see aa token aa frontend mathi aavse req.header(authorization ma aavse) if tokn wrong ne nai made toh token not found nd tya thi j return 
const auth = (req,res,next)=>{
    let token = req.header("Authorization")
    // console.log(token)

    if(!token)
    {
        return res.status(404).json({msg:"token not found"})
    }

    // if token madi jai pachi aa token ne decode karsu 
// aaj token ne decode karva mate verify use thase je frontend ma create kariyu hatu ne ee 
    let decode = jwt.verify(token,"mishri")
    console.log(decode)
    req.user = decode.users
    next()

}

module.exports = auth