import express from "express";
import { newProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/new").post(newProduct);

export default productRouter;
