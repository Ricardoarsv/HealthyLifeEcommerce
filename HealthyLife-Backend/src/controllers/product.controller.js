const Product = require("../models/product.models");

class ProductController {
  constructor() {
    this.product = new Product();
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.product.getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
