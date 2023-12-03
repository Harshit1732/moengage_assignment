const express = require("express");
const path = require("path");
const { signup, login, updateProfile } = require(path.join(
  __dirname,
  "../controller/userController"
));

const authMiddleware = require("../middlerware/authMiddlerware"); // Import authentication middleware

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.use(authMiddleware.auth);

router.put("/profile", updateProfile);

module.exports = router;
