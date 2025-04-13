import Cart from "../models/cartModel.js";

export const addItemToCart = async (req, res, next) => {
  try {
    const cartItem = await Cart.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    console.log(error);
  }
};

export const getCartItems = async (req, res, next) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.log(error);
  }
};
