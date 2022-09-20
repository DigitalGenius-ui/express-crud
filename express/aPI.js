const express = require("express");
const cors = require("cors");    

const app = express();
const data = require("../data");

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Hello this is home page")
});

app.get("/products", (req, res) => {
    res.status(200).json(data);
});

//getting special parts
app.get("/products/product", (req, res) => {
    const onlyName = data.map((item) => {
        const { fName, id } = item;
        return {fName, id}
    })
    res.status(200).json(onlyName);
});

//getting single products via its id.
app.get("/products/:productID", (req, res) => {
    const {productID} = req.params;
    console.log(req.params)
    const onlyName = data.find((item) => item.id === +productID);
    res.status(200).json(onlyName);
});

app.all("*", (req, res) => {
    res.status(404).send("This page is not found")
});

app.listen(5000, () => console.log('App is running on port 5000'))