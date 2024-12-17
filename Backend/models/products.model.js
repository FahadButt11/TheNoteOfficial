const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  stock: { type: Number, required: true },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", productSchema);


  