const Product = require("../model/productMod");

exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, category } = req.body;
    const product = await Product.create({ name, price, category });
    //const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
};
