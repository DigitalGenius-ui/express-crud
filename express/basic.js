const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});

// all is used for error pages 
app.all("*", (req, res) => {
    res.status(404).send("<h1>Page is not found</h1>");
})

app.listen(5000, () => {
    console.log(`app is running on port 5000`);
})