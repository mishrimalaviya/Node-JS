const schema = require("../model/Schema")

module.exports.login = (req, res) => {
    res.render("Login")
}
// aa pela jose ke email nd passwrd same che if same hoi then aa cookie ma storage karse
module.exports.auth = async (req, res) => {
    console.log(req.body)
        res.redirect("/dashboard")
}
module.exports.logout=(req,res)=>{
    // res.clearCookie("admin")
    req.session.destroy()
    res.redirect("/")
}
// aa je if condition ma che aa restickion lagadse ke jya sudhi email ne password same ny hoi database mathi ne cookie ma Storage thase toh j dashboard ma bakki login page ma j rai 
module.exports.dashboard = (req, res) => {
    // cookie ni andr admin name ni key hoi toh aa dashboard ma jase or else home page 
        res.render("DashBoard")
}
module.exports.Form = (req, res) => {
        res.render("Form")
}
module.exports.table = async (req, res) => {
    await schema.find({})
        .then((ad) => {
            res.render("Table", { ad })
        })
}
module.exports.addData = async (req, res) => {
    console.log(req.body)
    await schema.create(req.body)
        .then(() => {
            res.redirect("/table")
        })
}
module.exports.deleteadmin = async (req, res) => {
    console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
        .then(() => {
            res.redirect("/table")
        })
}
module.exports.editadmin = async (req, res) => {
    console.log(req.query.id)
    await schema.findById(req.query.id)
        .then((datas) => {
            res.render("Update", { datas })
        })
}

module.exports.updateAdmin = async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
            res.redirect("/table")
        })
}
