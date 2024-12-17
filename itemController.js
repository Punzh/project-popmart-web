const Product = require('../models/Item');

module.exports = async (req, res) => {
  try {
    // Fetch all products
    const products = await Product.find({});
    console.log("All Products:", products);

    // Pass the products data to the frontend
    res.render('itemlist', { products });
  } catch (error) {
    console.error("Error fetching products:", error);

    // Send an error message to the frontend
    res.status(500).render('error', { message: "Failed to fetch products." });
  }
};
