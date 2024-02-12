import Product from '../models/product.js';

const getProducts = async (req, res) => {
  res.status(200).json({
    message: 'You are in the getProducts route.',
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
