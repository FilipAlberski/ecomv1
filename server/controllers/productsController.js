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

//get single product details => /api/v1/products/:id

const getProductDetails = async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(500).json({
      message: 'Product not found with this ID',
    });
  }
  res.status(200).json({
    product,
  });
};

export { getProducts, newProduct, getProductDetails };
