const Product = require('../models/product.model');
const getAllProdServices = async () => {
  return Product.find({});
};

const createProdService = async (payload) => {
  const newProduct = new Product(payload);
  return await newProduct.save();
};

const getProdByIdService = async (id) => {
  return Product.findById(id);
};

module.exports = {
  getAllProdServices,
  createProdService,
  getProdByIdService,
};
