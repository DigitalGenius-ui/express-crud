const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./bootstrap5/index.html");
const homeStyle = readFileSync("./bootstrap5/css/index.css");
const homeLogic = readFileSync("./bootstrap5/js/index.js");

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/"){
        res.writeHead(200, {"content-type" : "text/html"});
        res.write(homePage);
        res.end()
    }
    else if(url === "/css/index.css"){
        res.writeHead(200, {"content-type" : "text/css"});
        res.end(homeStyle)
    }
    else if(url === "/js/index.js"){
        res.writeHead(200, {"content-type" : "text/css"});
        res.end(homeLogic)
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end(`<h1>404, No page is fount</h1>`)
    }
})

server.listen(3000);