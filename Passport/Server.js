const express = require("express")
const port = 5001
const app = express()
const path = require("path")
const db = require("./Config/db")
const cookie = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const connectFlash = require("connect-flash")
const flash = require("./middleware/flash")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "Public")))
app.use('/uploads', express.static(path.join(__dirname, "uploads")))  //multer 
app.use(cookie())

app.use(session({
    name: "locals",
    secret: "mishri",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 }

}))

app.use(passport.session())   // passport connected to the session
app.use(passport.initialize()) // passport connect 

app.use(connectFlash())
app.use(flash.setFlash)
app.use("/", require("./Routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Your server is created on the port " + port)
})