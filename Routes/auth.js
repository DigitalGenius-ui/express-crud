import express from "express";
const auth = express.Router();

auth.post("/", (req, res) => {
    const { name } = req.body;
    if(name){
        res.status(200).send(`Welcome ${name} to your dashboard`);
    }
    res.status(401).send("Pleas provide a name");
});

export default auth;