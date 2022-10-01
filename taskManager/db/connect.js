import mongoose from "mongoose";

export const fetchDb = (url) => {
    mongoose.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology:true
    });
}