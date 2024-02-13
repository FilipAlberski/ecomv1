import mongoose from 'mongoose';
import products from './data.js';
import Product from '../models/product.js';
import dotenv from 'dotenv';

dotenv.config({ path: 'server/config/config.env' });

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URI);

    await Product.deleteMany();
    console.log('Products are deleted');

    await Product.insertMany(products);
    console.log('All Products are added');
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};

seedProducts();
