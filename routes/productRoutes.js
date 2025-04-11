import express from "express";
import {
  newProduct,
  getOneProduct,
  getProducts,
  deleteProduct,
  editProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/new").post(newProduct);
productRouter.route("/:slug").get(getOneProduct).delete(deleteProduct);
productRouter.route("/").get(getProducts);
productRouter.route("/:id").put(editProduct);

export default productRouter;
