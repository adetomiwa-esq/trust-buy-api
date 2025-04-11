import express from "express";
import {
  newProduct,
  getOneProduct,
  getProducts,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/new").post(newProduct);
productRouter.route("/:slug").get(getOneProduct);
productRouter.route("/").get(getProducts);

export default productRouter;
