const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page')
    }
    else if(req.url === '/about'){
        res.end('Here is about page')
    }
    else{
        res.end(`
            <h1>Oopss!</h1>
            <p>We cant seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `)
    }
    

})

server.listen(5000)