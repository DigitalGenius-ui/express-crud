const { writeFileSync }  = require("fs");

for (let i = 0; i < 100000; i++) {
    writeFileSync("../content/big.txt", `Here is the ${i}\n`, {flag : "a"});
}