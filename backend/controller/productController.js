const productModel = require("../models/reviewmodel");
const mongoose = require("mongoose");
const getProductDetails = async (req, res) => {
  const id = req.params.id;

  const productdetail = await productModel.findById(id);
};

const addReview = async (req, res) => {
  const id = req.params.id;
  try {
    // let productDetail = await productModel.findOne({ productId: id });
    const review = {
      rating: req.body.rating,
      description: req.body.description,
    };
    // if (productDetail) {
    //   productDetail.reviews.push(review);
    //   await productDetail.save();
    // } else {
      await productModel.create({
        productId: id,
        reviews: [review],
      });
    
    res.status(200).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addReview };
