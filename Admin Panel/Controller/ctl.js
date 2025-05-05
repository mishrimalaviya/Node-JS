const schema = require("../model/schema")

module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.addlogin = async (req, res) => {
    console.log(req.body)
    // mare aaju check thase ke ee email nd passowrd che ke ny pachi j this.dashboard ma thase pachi cookie ne install thase pachi aane badha ma use karva mate ne pachi ctl ma if email nd password bei correct che toh pachi aa data ne cookie ma store kari loo  cookie hoi toh aa loin thase ny hoi toh login ny thai // means jo login kar tyare pela check kare ke email n pasword aa che same hoi toh aa cookie ma store tha pachi aa cookie ma if data hoi toh dashboard na lai jase bakki login thai jase
    let admin = await schema.findOne({ email: req.body.email })

    if (!admin) {
        return res.redirect("/")
    }

    if (req.body.password == admin.password) {
        res.cookie("admin", admin)
        res.redirect("/dashboard")
    }
    else {
        return res.redirect("/")
    }

}
// connect dashboard 
module.exports.dashboard = (req, res) => {
    if (req.cookies.admin) {
        res.render("dashboard")
    }
    else {
        res.redirect("/")
    }
}
// connect addadminpage 
module.exports.addadminpage = (req, res) => {
    if (req.cookies.admin) {
        res.render("Addadmin")
    }
    else {
        res.redirect("/")
    }
}
// add data to the database
module.exports.addatas = async (req, res) => {
    console.log(req.body)
    await schema.create(req.body)
        .then(() => {
            res.redirect("/viewadminpage")
        })
}
// data ne db mathi laine show karavse
module.exports.viewadminpage = async (req, res) => {
    await schema.find({})
        .then((demodata) => {
            console.log(demodata)
            res.render("Viewadmin", { demodata })
        })
}

module.exports.delete = async (req, res) => {
    console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
        .then(() => {
            res.redirect("/viewadminpage")
        })
}

module.exports.edits = async (req, res) => {
    console.log(req.query.id)
    await schema.findById(req.query.id)
        .then((dat) => {
            res.render("update", { dat })
        })

}
module.exports.update = async (req, res) => {
    console.log(req.body)
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then(() => {
            res.redirect("/viewadminpage")
        })
}