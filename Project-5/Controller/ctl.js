const schema = require("../model/sechma")
module.exports.homepage = async (req, res) => {
    await schema.find({})
        .then((dat) => {
            res.render("home" ,{dat})         
        })
}

module.exports.addMovie = async (req, res) => {
    console.log(req.body)
    await schema.create(req.body)
        .then(() => {
            res.redirect("/")
        })

}
module.exports.delete = async (req,res)=>{
    console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect("/")
    })
}

module.exports.edit = async(req,res)=>{
    console.log(req.query.id)
    await schema.findById(req.query.id)
    .then((update)=>{
        res.render("Update",{update})
    })
}

module.exports.update = async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body)
    .then(()=>{
        res.redirect("/")
    })
}