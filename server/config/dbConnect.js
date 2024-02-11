import mongoose from 'mongoose';

const dbConnect = async () => {
  let dbURI;

  if (process.env.NODE_ENV === 'PRODUCTION') {
    dbURI = process.env.DB_PROD_URI;
  } else if (process.env.NODE_ENV === 'DEVELOPMENT') {
    dbURI = process.env.DB_LOCAL_URI;
  }

  mongoose
    .connect(dbURI, {})
    .then((con) => {
      console.log(`MongoDB database connected with HOST: ${con?.connection?.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default dbConnect;
