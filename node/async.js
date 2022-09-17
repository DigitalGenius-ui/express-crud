const http = require("http");

let server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("This is the main page");
    }
    if(req.url === "/about"){
        res.end("This is the about page");
    }
    res.end("wrong page")
});

server.listen(3000);