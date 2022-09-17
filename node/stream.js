const http = require("http");
const fs = require("fs");

 const readStream = fs.createReadStream("./content/big.txt", {highWaterMark:90000, encoding : "utf8"});
//  highWaterMark: 90000 is to control the size of the file.
readStream.on("data", (result) => {
    // console.log(result)
});

http.createServer((req, res) => {
    const stream = fs.createReadStream("./content/big.txt", {highWaterMark:90000, encoding : "utf8"})
    stream.on("open", () => {
        stream.pipe(res);
    });

    stream.on("error", (err) => {
        res.end(err);
    })
}).listen(5000);