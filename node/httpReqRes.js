const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {"content-type" : "text/html"});
        res.write(homePage);
        res.end()
    }else if(url === "/about"){
        res.writeHead(200, {"content-type" : "text/html"});
        res.end(`<h1>about page</h1>`)
    }else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end(`<h1>404, No page is fount</h1>`)
    }
})

server.listen(3000);