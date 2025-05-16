const schema = require("../model/Category")
const path = require("path")
module.exports.addcate = (req, res) => {
    res.render("Category")
}

module.exports.addcatedata = async (req, res) => {
    console.log(req.body)
    console.log(req.file)

    req.body.image = req.file.path
    await schema.create(req.body)
        .then(() => {
            res.redirect("/category/viewcat")
        })

}

module.exports.viewcate = async (req, res) => {
    await schema.find({})
        .then((da) => {
            res.render("viewcategory",{da})
        })
}