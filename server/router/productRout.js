const express = require("express");
const { createProduct } = require("../controller/productCont");

const router = express.Router();

router.post("/create", createProduct);

module.exports = router;
