const Categorydata = require("../model/Category")
const SubCategory = require("../model/Subcategory")

module.exports.addsubcate = async (req, res) => {
    await Categorydata.find({})
        .then((data) => {
            console.log(data)
            res.render("SubCategory", { data })
        })

}
module.exports.addSubCatedata = async (req, res) => {
    console.log(req.body)
    await SubCategory.create(req.body)
        .then(() => {
            res.redirect("/subcategory/viewsubcat")
        })

}
module.exports.viewsubcat = async (req, res) => {
    await SubCategory.find({}).populate("categoryId")
        .then((da) => {
            console.log(da)
            res.render("ViewSubcategory", { da })
        })
}