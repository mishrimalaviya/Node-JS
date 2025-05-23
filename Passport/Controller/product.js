const subcategory = require("../model/Subcategory")
const productschema = require("../model/Product")
module.exports.productpage = async (req, res) => {
    await subcategory.find({})
        .then((d) => {
            res.render("Product", { d })
        })
}

module.exports.addproduct = async (req, res) => {
    console.log(req.body)
    req.body.image = req.file.path
    await productschema.create(req.body)
        .then(() => {
            res.redirect("/product/viewproduct")
        })

}

module.exports.viewproduct = async (req, res) => {
    await productschema.find({})
        .populate({
            path: "productId",
            populate: {
                path: "categoryId"
            }
        })
        .then((p) => {
            console.log(p)
            res.render("Viewproduct",{p})

        })
}