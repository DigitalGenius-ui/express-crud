import express from "express";
import { getAllTasks, getTask ,sendTasks ,updateTasks ,deleteTasks } from "../controler/controler.js";

export const tasks = express.Router();

tasks.route("/").get(getAllTasks).post(sendTasks);
tasks.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks);