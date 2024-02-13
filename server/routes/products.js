import express from 'express';

import { getProducts, newProduct, getProductDetails, updateProduct, deleteProduct } from '../controllers/productsController.js';
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/admin/products').post(newProduct);
router.route('/products/:id').get(getProductDetails);
router.route('/admin/products/:id').put(updateProduct);
router.route('/admin/products/:id').delete(deleteProduct);

export default router;
