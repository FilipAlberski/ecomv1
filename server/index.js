import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: 'server/config/config.env' });
import productsRoute from './routes/products.js';
import dbConnect from './config/dbConnect.js';
import errorMiddleware from './middleware/error.js';
// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err}`);
  console.log('Shutting down due to uncaught expection');
  process.exit(1);
});

dotenv.config({ path: 'server/config/config.env' });

// Connecting to database
dbConnect();

app.use(express.json());

// Import all routes
import productRoutes from './routes/products.js';

app.use('/api/v1', productRoutes);

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

//Handle Unhandled Promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
