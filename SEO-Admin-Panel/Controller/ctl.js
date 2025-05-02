const schema = require("../model/Schema")

module.exports.login = (req, res) => {
    res.render("Login")
}
// aa pela jose ke email nd passwrd same che if same hoi then aa cookie ma storage karse
module.exports.auth = async (req, res) => {
    console.log(req.body)
    let admin = await schema.findOne({ email: req.body.email });
    if (!admin) {
        return res.redirect("/")
    }

    if (req.body.password == admin.password) {
        res.cookie("admin", admin)
        res.redirect("/dashboard")
    }
    else {
        res.redirect("/")
    }

}
module.exports.logout=(req,res)=>{
    res.clearCookie("admin")
    res.redirect("/")
}
// aa je if condition ma che aa restickion lagadse ke jya sudhi email ne password same ny hoi database mathi ne cookie ma Storage thase toh j dashboard ma bakki login page ma j rai 
module.exports.dashboard = (req, res) => {
    // cookie ni andr admin name ni key hoi toh aa dashboard ma jase or else home page 
    if (req.cookies.admin) {
        res.render("DashBoard")
    }
    else {
        res.redirect("/")
    }

}
module.exports.Form = (req, res) => {
    if (req.cookies.admin) {
        res.render("Form")

    }
    else
    {
        res.redirect("/")
    }

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
