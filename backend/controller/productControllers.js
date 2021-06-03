const Products = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllProductsById = async (req, res) => {
  try {
    const products = await Products.findById(req.params.id);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsById,
};
