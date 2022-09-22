import express from "express";
import cors from "cors";
import product from "./Routes/products.js";
import auth from "./Routes/auth.js";

const app = express();

// this shows all assets in node file
app.use(express.static("./bootstrap5"));
//this show req.body text;
app.use(express.urlencoded({extended : false}))
//make possible to show the req.body text in post request;
app.use(express.json());
app.use(cors());

//router
app.use("/api/products", product);
app.use("/login", auth);


app.listen(5000);