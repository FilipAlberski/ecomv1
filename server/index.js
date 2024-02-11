import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
  path: 'server/config/config.env',
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
