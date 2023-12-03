const express = require("express");


const {addReview}= require('../controller/productController')

const router = express.Router();

router.post('/addreview/:id', addReview);


module.exports = router;
