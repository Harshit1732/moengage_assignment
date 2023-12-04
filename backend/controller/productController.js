const productModel = require("../models/reviewmodel");
const mongoose = require("mongoose");

const getProductReviews = async (req, res) => {
  const id = req.params.id;
  try {
    const productdetail = await productModel.findOne({ productId: id });
    console.log(productdetail);
    if (productdetail) {
      res.status(200).json({ review: productdetail.reviews });
    } else {
      res.json("product not found");
    }
  } catch (err) {
    console.log(err);
  }
};

const addReview = async (req, res) => {
  const id = req.params.id;
  try {
    const productDetail = await productModel.findOne({ productId: id });
    // console.log(productDetail);
    // console.log(req._id)
    const review = {
      userId: req._id,
      rating: req.body.rating,
      description: req.body.description,
    };
    if (productDetail) {
      productDetail.reviews.push(review);
      await productDetail.save();
    } else {
      await productModel.create({
        productId: id,
        reviews: [review],
      });
    }
    res.status(200).json({ productDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addReview, getProductReviews };
