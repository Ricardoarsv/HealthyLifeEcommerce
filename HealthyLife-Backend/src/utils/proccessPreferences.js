const Product = require("../models/product.model");

const processPreferences = async (userPreferences) => {
  const Products = new Product();
  const products = await Products.getProducts();

  if (!Array.isArray(products)) {
    throw new Error("getProducts did not return an array");
  }

  const { preferences } = userPreferences;
  const macronutrient = preferences.macronutrient;
  const gluten_free = preferences.gluten_free;

  if (!["Protein", "Carbs", "Fat"].includes(macronutrient)) {
    throw new Error("Invalid macronutrient preference provided");
  }

  // Filtrar productos según las preferencias del usuario
  let filteredProducts = products.filter(
    (product) => product.macronutrients[macronutrient] > 0
  );
  if (gluten_free) {
    filteredProducts = filteredProducts.filter(
      (product) => product.macronutrients.gluten === "no"
    );
  }

  // Ordenar productos por contenido del macronutriente en orden descendente
  filteredProducts.sort(
    (a, b) => b.macronutrients[macronutrient] - a.macronutrients[macronutrient]
  );

  // Limitar las recomendaciones a tres productos
  const recommendedProducts = filteredProducts.slice(0, 3).map((product) => ({
    product: product,
    reason: `High in ${macronutrient.toLowerCase()}${
      gluten_free ? " and gluten-free" : ""
    }`,
  }));

  return recommendedProducts;
};

module.exports = processPreferences;
