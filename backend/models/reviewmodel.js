const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true
  },
  rating: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    require: true,
  },
  reviews: [reviewSchema],
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
