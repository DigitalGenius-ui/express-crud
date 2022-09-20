const express = require("express");
const path = require("path");

const data = require("../data");

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>This is the api home page
    <a href="/api/products">Products</a>
    </h1>`);
})

// this is how we get products that we need only.
app.get("/api/products", (req, res) => {
    const newProduct = data.map((item) => {
        const { fName, id } = item;
        return {fName, id}
    })
    res.json(newProduct);
})

// this is how we get products according to its id.
app.get("/api/products/:productID", (req, res) => {
    const { productID } = req.params;
    const newProduct = data.find((item) => item.id === +productID);
    // set conditional for error page 
    if(!newProduct){
        res.status(404).send("Product with this ID is not exist");
    }
    return res.json(newProduct);
})

app.listen(5000, () => {
    console.log(`app is running on port 5000`);
})