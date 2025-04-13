import express from "express";
import { addItemToCart, getCartItems } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.route("/items").get(getCartItems);
cartRouter.route("/new").post(addItemToCart);

export default cartRouter;
