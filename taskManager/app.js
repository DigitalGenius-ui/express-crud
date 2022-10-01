import express from "express";
import { tasks } from "./routes/routes.js"
import { fetchDb } from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = 5000;
//this show req.body text;
app.use(express.urlencoded({extended : false}))
// middleware
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());

// create requests 
app.use("/api/manager", tasks);

const dbFetch = async () => {
    try {
        await fetchDb(process.env.MONGO_DB);
        app.listen(PORT, () => console.log(`Port is running on port ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

dbFetch();
