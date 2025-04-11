import Product from "../models/productModel.js";

// create new product

export const newProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};
