console.log("form connected!");
import ProductsController from "./ProductsController.js";
// Initialize a new productsController with currentId set to 0
const productsController = new ProductsController(0);
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
  const name = newProductName.value;
  const description = newProductDescription.value;
  const imageUrl = newProductImageUrl.value;
  const imageAltText = newProductImageAltText.value;
  const price = newProductPrice.value;
  // Validation Code
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
console.log(productsController.products);
