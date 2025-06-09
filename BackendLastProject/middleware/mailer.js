
const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service :"gmail",
    auth :{
        user : "mishri1411804@gmail.com",
        pass :"cexxoompudxbiftf"
    }
})

module.exports.sendotp =(to,otp)=>{
    let mainoption ={
        to : to,
        from : "mishri1411804@gmail.com",
        subject :"Password Reset OTP",
        text : `${otp} Reset Your Password `
    }
    transport.sendMail(mainoption)
}

module.exports.sendmanagerdetail =(to , password,portalLink = "http://localhost:4001/admin/Manager/ManagerRegister")=>{
    let mainopt = {
        to : to,
        from :"mishri1411804@gmail.com",
        subject :"Manager details",
        text:` Hello ! Your manager account has been created
          Email: ${to}
          Password: ${password} (the password you used or a temporary one)
          PortalLink : ${portalLink} login here
          Thank you!`
    }
    transport.sendMail(mainopt)
}

module.exports.sendEmployeedetail =(to , password,portalLink = "http://localhost:4001/admin/Manager/ManagerRegister")=>{
    let mainopts = {
        to : to,
        from :"mishri1411804@gmail.com",
        subject :"Employee details",
        text:` Hello ! Your employee account has been created
          Email: ${to}
          Password: ${password} (the password you used or a temporary one)
          PortalLink : ${portalLink} login here
          Thank you!`
    }
    transport.sendMail(mainopts)
}

