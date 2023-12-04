const express = require("express");


const {addReview, getProductReviews}= require('../controller/productController')
const {auth}= require('../middlerware/authMiddlerware')

const router = express.Router();

router.post('/addreview/:id',auth, addReview);
router.get('/getReview/:id',auth, getProductReviews);

module.exports = router;
