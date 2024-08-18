const EcommerceProducts = require("../JSON/EcommerceProducts.json");

class Product {
  constructor() {}

  async getProducts() {
    return EcommerceProducts;
  }
}

module.exports = Product;
