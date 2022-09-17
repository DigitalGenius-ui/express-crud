const { readFile, writeFile } = require("fs").promises;

const readText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

const readMe = async () => {
    try {
        let first = await readText("add.txt");
        let second = await readText("write.txt");
        console.log(first)
        console.log(second)
    } catch (error) {
        throw Error(error);
    }
}

const { resolve } = require("path");
// readMe();

const util = require("util");

const utilePromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile);

const promise = async () => {
    try {
        const read = await utilePromise("write.txt", "utf-8");
        const write = await writePromise("./content/utile-write.txt", "Hey dear friend this me again");
        console.log(read);
        console.log(write)
    } catch (error) {
        console.log(error)
    }
}

// promise();

// last way of promise in node JS
const fsPromise = async () => {
    let read = await readFile("./content/utile-write.txt", "utf-8");
    console.log(read);
}

fsPromise();


