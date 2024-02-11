const getProducts = async (req, res) => {
  res.status(200).json({
    message: 'You are in the getProducts route.',
  });
};

export { getProducts };
