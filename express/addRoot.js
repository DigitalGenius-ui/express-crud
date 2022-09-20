const express = require("express");
const path = require("path");

const app = express();

// app.us is using for middleware.
app.use(express.static("../public"))

app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "./bootstrap5/index.html"));
});


app.listen(5000, () => {
    console.log(`app is running on port 5000`);
})