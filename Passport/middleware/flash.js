module.exports.setFlash = (req,res,next)=>{
    res.locals.flash ={
        "success" : req.flash("success"),
        "err" : req.flash("err")
    }
    next()
}