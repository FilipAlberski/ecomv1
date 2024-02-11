import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: 'server/config/config.env' });
import productsRoute from './routes/products.js';

const app = express();

// import routes

app.use('/api/v1/products', productsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});
