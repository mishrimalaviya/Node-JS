module.exports.addsubcate = (req,res)=>{
    res.render("SubCategory")
}
module.exports.addSubCatedata = (req,res)=>{
    console.log(req.body)
}
module.exports.viewsubcat = (req,res)=>{
    res.render("ViewSubcategory")
}