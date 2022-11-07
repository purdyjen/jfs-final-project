import ProductsController from "./ProductsController.js";
import { titleCase, formatPrice } from "./helperFunctions.js";
// Initialize a new productsController with currentId set to 0
const productsController = new ProductsController();
productsController.loadProductsFromLS();
// Select the new product form
const addNewProductForm = document.getElementById("add-new-product");
// Add an onsubmit event listener

addNewProductForm.addEventListener("submit", (e) => {
  // Prevent default action
  e.preventDefault();
  // Select the inputs
  const newProductName = document.getElementById("product-name");
  const newProductDescription = document.getElementById("product-description");
  const newProductImageUrl = document.getElementById("product-image-url");
  const newProductImageAltText = document.getElementById("image-alt-text");
  const newProductPrice = document.getElementById("product-price");
  // Get the values of the inputs
  let name = newProductName.value;
  let description = newProductDescription.value;
  let imageUrl = newProductImageUrl.value;
  let imageAltText = newProductImageAltText.value;
  let price = Number(newProductPrice.value);
  // Validation Code

  // Name Validation - desired output is title case
  name = titleCase(name);

  // Format price to have two decimals
  price = formatPrice(price);

  // Add product to the ProductsController
  productsController.addProduct(
    name,
    description,
    imageUrl,
    imageAltText,
    price
  );
  productsController.saveProductsToLS();

  // Clear the form
  newProductName.value = "";
  newProductDescription.value = "";
  newProductImageUrl.value = "";
  newProductImageAltText.value = "";
  newProductPrice.value = "";
});
