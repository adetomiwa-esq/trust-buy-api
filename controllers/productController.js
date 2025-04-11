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

// fetch one product
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

// fetch all products

export const getProducts = async (req, res, next) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
