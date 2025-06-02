const schema = require("../model/schema")
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")

// firstly check in the database Is my email is store in the database if yes (if you get the users then it will return nd give the msj that user is already login )
// after that make  make the password brypt  after that you store data with brypt password so noone can read your password 
// or if user is false it came in the await schemas create nd post the data into database
module.exports.Register = async(req,res)=>{
    let users = await schema.findOne({email : req.body.email})
    if(users)
    {
        // this msj is shown on the api testing tool (postman)
        return res.status(200).json({msg:"user already login"})
    }

    req.body.password = await bcrypt.hash(req.body.password,10)

    await schema.create(req.body)
    .then((datas)=>{
        console.log(datas)
        return res.status(200).json({msg:"user login successfully", users :datas})
    })

}
// see pela aama check karse ke email che ( admin thrugh) jo no hoi ne toh msj karse ke emzil not found if hoi toh pachi pasword check thase nd bei equal hase ne toh token create thase if password wrong hase toh password wrong no msj aavse 
module.exports.login = async(req,res)=>{
    console.log(req.body)
    let users = await schema.findOne({email:req.body.email})
    if(!users)
    {
        return res.status(200).json({msg :"Admin Not Found" , code :100})
    }

    if(await bcrypt.compare(req.body.password , users.password))
    {
        let token = jwt.sign({users},"mishri",{expiresIn:"1h"})
        return res.status(200).json({msg:"You Successfully login" , code :200,token : token})
    }
    else{
        return res.status(200).json({msg:"Password is wrong " , code:101})
    }
}

// module.exports.addAdmin =async(req,res)=>{
//     await schema.find({})
//     .then((dat)=>{
//         res.status(200).json({msg:"all data is here",data:dat})
//     })
// }