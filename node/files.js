const { readFileSync, writeFileSync } = require("fs");

writeFileSync("write.txt", "This is a new file");
writeFileSync("new-file.txt", "\nplease add a new file in txt format", {flag : "a"})
console.log(readFileSync("write.txt", "utf-8"));

const { readFile, writeFile } = require("fs");

console.log("start")
writeFile("add.txt", "this is a text" ,(err, data) => {
    if(data){
        console.log(data)
    }else{
        console.log(err)
    }

    console.log(readFile("add.txt", "utf-8" ,(err, data) => {
        if(data){
            console.log(data)
        }else{
            console.log(err)
        }
    }))
});
console.log("end")