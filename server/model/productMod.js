const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  price: {
    type: String,
    required: [true, "Please enter a product price"],
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
