const mongoose = require("mongoose");

// Define the schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  description: {
    type: String,
    required: true, // Description is required
  },
  price: {
    type: Number,
    required: true, // Extracted price from the description
  },
  image: {
    type: String,
    required: true, // Image URL is required
  },
});

// // Pre-save middleware to handle extracting price from the description use for later
// productSchema.pre("save", function (next) {
//     // Improved regex to find "Price <number> Baht" even with surrounding text
//     const priceMatch = this.description.match(/Price\s([\d,]+)\sBaht/);
//     if (priceMatch) {
//       const extractedPrice = parseInt(priceMatch[1].replace(/,/g, ""), 10);
//       this.price = extractedPrice;
//       next();
//     } else {
//       next(new Error("Price could not be extracted from description"));
//     }
//   });
  
  
// Create the model
const Product = mongoose.model("Product", productSchema, "items");
module.exports = Product;
