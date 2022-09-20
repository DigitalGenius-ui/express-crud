import express from "express";

const app = express();

// Global middleware. It will be printed after all other routes.
app.use([logger, auth]);

app.get("/", (req, res) => {
    console.log(req.admin)
    console.log("Home Page")
    res.send("This is the homepage")
});

app.get("/user", (req, res) => {
    res.send("This is the User page")
});

function logger (req, res, next){
    console.log("log");
    next();
}

function auth(req, res, next){
    if(req.query.admin === "milad"){
        req.admin = {name:'milad', id:1};
        // the next is working similar to return.
        next();
        return;
    }
    res.send("User is not Authenticated");
}

app.listen(5000);