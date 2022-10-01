import Task from "../db/module/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg : error});
    }
}

export const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const tasks = await Task.findOne({_id:taskID});
        // if there is not id matches the id we pass 
        if(!tasks){
            res.status(404).json({msg : `The tasks with the id of ${taskID} is not exist`});
        }
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

export const sendTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

export const deleteTasks = async (req, res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findByIdAndDelete({_id:taskID});
        if(!task){
            res.status(404).json({msg : `The tasks with the id of ${taskID} is not exist`});
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

export const updateTasks = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body,{
            new:true,
            runValidators : true
        });
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}