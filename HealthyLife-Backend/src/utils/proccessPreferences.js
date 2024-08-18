const Product = require("../models/product.models");

const processPreferences = async (userPreferences) => {
  const Products = new Product();
  const products = await Products.getProducts();

  if (!Array.isArray(products)) {
    throw new Error("getProducts did not return an array");
  }

  const { preferences } = userPreferences;

  const filteredProducts = products.filter((product) => {
    const { macronutrients } = product;
    return (
      (preferences.high_protein ? macronutrients.proteins >= 5 : true) &&
      (preferences.gluten_free ? macronutrients.gluten === "no" : true) &&
      (preferences.high_fat ? macronutrients.fats >= 5 : true) &&
      (preferences.high_carbohydrates
        ? macronutrients.carbohydrates >= 5
        : true)
    );
  });

  const topMatches = filteredProducts.slice(0, 3);

  const explanations = topMatches.map((product) => {
    const reasons = [];
    if (preferences.high_protein && product.macronutrients.proteins >= 5) {
      reasons.push("high in protein");
    }
    if (preferences.gluten_free && product.macronutrients.gluten === "no") {
      reasons.push("gluten-free");
    }
    if (preferences.high_fat && product.macronutrients.fats >= 5) {
      reasons.push("high in fat");
    }
    if (
      preferences.high_carbohydrates &&
      product.macronutrients.carbohydrates >= 5
    ) {
      reasons.push("high in carbohydrates");
    }
    return {
      product,
      reasons: reasons.join(", "),
    };
  });

  return explanations;
};

module.exports = processPreferences;
