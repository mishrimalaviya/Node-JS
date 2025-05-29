const schema = require("../model/Schema")


module.exports.addData = async(req,res)=>{
    console.log(req.body) 
    await schema.create(req.body)
    .then(()=>{
        res.json({msg : "data added"})
    })
}

module.exports.showData = async(req,res)=>{
    await schema.find({})
    .then((da)=>{
        console.log(da)
        res.json({msg : " data is get" , record : da})
    })
}

module.exports.delete = async(req,res)=>{
    // console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.json({msg : "data is deleted"})
    })
}

module.exports.edit = async(req,res)=>{
    console.log(req.query.id)
    await schema.findByIdAndUpdate(req.query.id , req.body)
    .then((datas)=>{
        res.json({msg :"Data is updated" , record : datas})
    })

}