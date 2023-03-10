const http = require('http')

// req = incoming request | res = what we send back
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('welcome to my homepage')
    }
    if (req.url === '/about'){
        res.end('this is the about page')
    }
    // tutorial didn't do anything to handle the error here
    res.end(`
    <h1>Welp!</h1>
    <p>Page does not exist</p>
    <a href="/">back home</a>`)
})

//what ports are we listening to
server.listen(5012)