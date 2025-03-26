const http = require("http")
const port = 3018 


const handler =(req,res)=>{
    res.write(`<h1>Successfully Your server is created on the Port : ${port}</h1>`)
    res.end()
}
const server = http.createServer(handler)

server.listen(port,(err)=>{
    // if(err)
    // {
    //     console.log(`Error Occuried ${port}`)
    // }
    // else
    // {
    //     console.log(`Server run successfully ${port}`)
    // }

    err ? console.log(`Error Occuried ${port}`) :  console.log(`Server run successfully ${port}`)
})