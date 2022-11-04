console.log("Index connected!");

import ProductsController from "./productsController.js";

const products = new ProductsController();

products.addProduct(
  "brand dog food",
  "dog food",
  "/images/products/dog-food-5168940_640.jpg",
  15
);

products.addProduct(
  "brand cat food",
  "cat food",
  "/images/products/cat-2170495_640.jpg",
  15
);

console.log(products.products);
