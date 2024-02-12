import Product from '../models/product.js';

// get all products => /api/v1/products
const getProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    product,
  });
};

// create new product => /api/v1/admin/products
const newProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    product,
  });
};

export { getProducts, newProduct };
