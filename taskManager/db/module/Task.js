import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "must be provided"],
        trim : true,
        maxlength : [20, "must be about 20 words"]
    },
    completed: {
        type : Boolean,
        default : false
    } 
});

const model =  mongoose.model("Task", TaskSchema);

export default model;