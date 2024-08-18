const ProductController = require("../controllers/product.controller");
const { Router } = require("express");

const productRouter = Router();

productRouter.get("/getProducts", ProductController.getAllProducts);

module.exports = productRouter;
