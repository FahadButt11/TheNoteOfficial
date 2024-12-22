const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 0 },
  stock: { type: Boolean, required: true },
  selectMl: { type: [Number], required: true },
  description: { type: String },
  olfactoryNotes: {
    topNotes: { type: [String], required: true },
    middleNotes: { type: [String], required: true },
    baseNotes: { type: [String], required: true },
  },
  productDetails: {
    quantity: { type: String, required: true },
    seasons: { type: [String], required: true },
    occasions: { type: [String], required: true },
    longLasting: { type: String, required: true },
  },
  images: { type: [String], required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Link to Category Schema
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review', // Link to Review Schema
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

// [
  // {
  //   "title": "Eau de Parfum - Mystic Woods",
  //   "price": 120,
  //   "quantity": 50,
  //   "stock": true,
  //   "selectMl": [50, 100, 200],
  //   "description": "An enchanting fragrance inspired by the mystique of dense woods and fresh breezes.",
  //   "olfactoryNotes": {
  //     "topNotes": ["Bergamot", "Lemon", "Pineapple"],
  //     "middleNotes": ["Lavender", "Rose", "Cardamom"],
  //     "baseNotes": ["Sandalwood", "Amber", "Patchouli"]
  //   },
  //   "productDetails": {
  //     "quantity": "100ml",
  //     "seasons": ["Winter", "Autumn"],
  //     "occasions": ["Evening", "Special Events"],
  //     "longLasting": "8-10 hours"
  //   },
  //   "images": [
  //     "https://example.com/images/mystic_woods_1.jpg",
  //     "https://example.com/images/mystic_woods_2.jpg"
  //   ],
  //   "category": "63a9f0f1e87a5b7d4d8f9c3e", 
  //   "reviews": ["63a9f0f1e87a5b7d4d8f9c4a", "63a9f0f1e87a5b7d4d8f9c4b"],
  //   "createdAt": "2024-12-21T00:00:00Z"
  // }
//   {
//     "title": "Floral Essence - Bloom",
//     "price": 95,
//     "quantity": 30,
//     "stock": true,
//     "selectMl": [30, 60, 100],
//     "description": "A delightful floral fragrance that celebrates the beauty of blooming gardens.",
//     "olfactoryNotes": {
//       "topNotes": ["Peach", "Green Apple", "Lily of the Valley"],
//       "middleNotes": ["Jasmine", "Tuberose", "Gardenia"],
//       "baseNotes": ["White Musk", "Vanilla", "Cedarwood"]
//     },
//     "productDetails": {
//       "quantity": "60ml",
//       "seasons": ["Spring", "Summer"],
//       "occasions": ["Daytime", "Casual Wear"],
//       "longLasting": "6-8 hours"
//     },
//     "images": [
//       "https://example.com/images/floral_essence_bloom_1.jpg",
//       "https://example.com/images/floral_essence_bloom_2.jpg"
//     ],
//     "category": "63a9f0f1e87a5b7d4d8f9c3f", 
//     "reviews": ["63a9f0f1e87a5b7d4d8f9c4c"],
//     "createdAt": "2024-12-21T00:00:00Z"
//   }
// ]
