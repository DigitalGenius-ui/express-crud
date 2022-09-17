const EventEmitter = require("events");
const http = require("http");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("response", (name, port) => {
//     console.log(`The ${name} event is running on port ${port}`)
// });

// eventEmitter.emit("response", "milad", 3000);

// emitting using the http ;

const server = http.createServer((req, res) => {
    res.end("hello")
});

server.on("response", (req, res) => {
    res.end("Hello world")
});

server.listen(3000);