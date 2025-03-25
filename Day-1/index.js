let http = require("http");  // http create karse
let port = 3018;            // potano unique port generate karse 

let servhandle = (req, res) => {
    res.write(`<h1>Welcome to the server ${port} !!</h1>`)
    res.end() 
}

let server = http.createServer(servhandle)


server.listen(port, (err) => {
    // if(err==true)
    // {
    //     console.log("beta err aave che")
    // }
    // else{
    //     console.log(`taru server create thai gyu congratulations ${port}!!`)
    // }

    err ? console.log("beta err aave che") : console.log(`taru server create thai gyu congratulations ${port}!!`)
})