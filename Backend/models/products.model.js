
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    stock: { type: Number, default: 0 },
    imageUrls: [String],
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Product", productSchema);
  