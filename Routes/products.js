import express from "express";
import {getProduct, addProduct, updateProduct, deleteProduct} from "../controler/controler.js";

const router = express.Router();

// first way of router 
// router.get("/", getProduct);
// router.post("/", addProduct)
// router.put("/:id", updateProduct);
// router.delete("/:id",deleteProduct);

// second way of router 
router.route("/").get(getProduct).post(addProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct); 

export default router;