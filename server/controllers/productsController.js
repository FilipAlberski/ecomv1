import Product from '../models/product.js';
import ErrorHandler from '../utils/errorHandler.js';

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

const getProductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req?.params?.id);
    if (!product) {
      return next(new ErrorHandler('Product not found with this ID', 404));
    }
    res.status(200).json({
      product,
    });
  } catch (err) {
    next(err);
  }
};

//update product details => /api/v1/admin/products/:id

const updateProduct = async (req, res) => {
  let product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(500).json({
      message: 'Product not found with this ID',
    });
  }
  product = await Product.findByIdAndUpdate(req?.params?.id, req?.body, { new: true });
  res.status(200).json({
    product,
  });
};

//delete product => /api/v1/admin/products/:id

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    return res.status(500).json({
      message: 'Product not found with this ID',
    });
  }
  await product.deleteOne();
  res.status(200).json({
    message: 'Product is deleted',
  });
};
export { getProducts, newProduct, getProductDetails, updateProduct, deleteProduct };
