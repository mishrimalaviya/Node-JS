const passport = require("passport")
const localst = require("passport-local").Strategy
const schema = require("../model/Schema")

// aa check karse
passport.use("local", new localst(
    {
        usernameField: "email"
    },
    // aa pela middle ware thi check karse ke je login ma data nakhiyu che aa passport thi check thase ke je admin.email che ee store che database ma aa ne aapde je nakhiyo che aa password same hoi toh aa auth pass thai jase 
    async (email, password, done) => {
        let admin = await schema.findOne({ email: email })
        if (admin) {
            if (admin.password == password) {
                return done(null,admin)
            }
            else {
                return done(null, false)
            }
        }
        else {
            return done(null, false)
        }
    }
))
// aa id store kare che jyare aa email ne pasword both correct hoi pachi aa email password no id store passport .serializeUser karse 
passport.serializeUser((admin, done) => {
    return done(null, admin.id)
})

passport.deserializeUser(async (adminId, done) => {
    let admin = await schema.findById(adminId)

    if (admin) {
        return done(null, admin)
    }
    else {
        return done(null, false)
    }
})

// restriction

passport.Auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.admin = req.user
        next()
    }
    else {
        res.redirect("/")
    }
}

module.exports = passport


