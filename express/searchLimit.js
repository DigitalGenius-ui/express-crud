import express from "express";
import data from "../data.js";

const app = express();

app.get("/", (req, res) => {
    res.send("This is the homepage")
});

app.get("/api/products/query", (req, res) => {
    const {search, limit} = req.query;
    let products = [...data];
    if(search){
        products = products.filter((item) => (item.fName).toLocaleLowerCase().startsWith(search));
    }
    if(limit){
        products = products.slice(0, +limit);
    }

    // check if the search name is not matching
    if(products.length < 1){
        return res.status(200).json({"success" : true, data : []})
    }

    res.status(200).json(products);

})

app.listen(5000, () => {
    console.log('app is running in port 5000')
})