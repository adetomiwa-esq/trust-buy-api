import Product from "../models/productModel.js";

// desc          create new product
// End point     /api/product/new

export const newProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

// desc             fetch one product
// Endpoint         /api/product/:slug
export const getOneProduct = async (req, res, next) => {
  try {
    if (!req.params.slug) {
      const err = new Error(
        `Product called ${req.params.slug} cannot be found`
      );
      err.status = 404;
      return next(err);
    }
    const product = await Product.findOne({ slug: req.params.slug });

    res.status(200).json(product);
  } catch (error) {}
};

// desc           fetch all products
// End point      /api/product

export const getProducts = async (req, res, next) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

// desc             delete product
// Endpoint         /api/product/:slug
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      const err = new Error(
        `Product called ${req.params.slug} cannot be found`
      );
      err.status = 404;
      return next(err);
    }

    await Product.findOneAndDelete({ slug: req.params.slug });

    res.status(200).json({ msg: `${req.params.slug} deleted successfully` });
  } catch (error) {
    console.log(error);
  }
};
