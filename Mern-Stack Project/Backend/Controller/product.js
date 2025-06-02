
const schema = require("../model/productSchema")
module.exports.ProductForm =async(req,res)=>{
    console.log(req.body)
    await schema.create(req.body)
    .then(()=>{
                res.json({msg : "data added"})
    })
}

module.exports.ShowData = async(req,res)=>{
    await schema.find({})
    .then((re)=>{
        
        console.log(re)
        res.json({msg:"data is get",record:re})
    })
}

module.exports.Delete = async(req,res)=>{
   console.log(req.query.id)
   await schema.findByIdAndDelete(req.query.id)
   .then(()=>{
        res.json({msg : "data is deleted"})
   })
}

module.exports.Editdata = async(req,res)=>{
    console.log(req.body)
    console.log(req.query.id)
    await schema.findByIdAndUpdate(req.query.id,req.body)
    .then((da)=>{
        res.json({msg :"Data is updated" , record : da})
    })
}