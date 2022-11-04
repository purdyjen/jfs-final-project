console.log("Index connected!");

import ProductsController from "./productsController.js";

const products = new ProductsController();

products.addProduct(
  "Brand Name Cat Food",
  "Don't forget to feed your precious fur babies.",
  "/images/products/cat-2170495_640.jpg",
  "A white bowl with cute cat ears full of cat food",
  15
);

products.addProduct(
  "Brand Name Dog Food",
  "Because dogs are ALWAYS starving.",
  "/images/products/dog-food-5168940_640.jpg",
  "A white bowl with green edges full of dog food",
  15
);

products.addProduct(
  "Brand Name Dog Treats",
  "Who's a good boy?? You're a good boy!",
  "/images/products/dog-bones-350092_640.jpg",
  "A colorful variety of bone-shaped dog treats",
  10
);

console.log(products.products);
const listProductsDiv = document.getElementById("list-products");

function addProductCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    const card = document.createElement("div"); // Creates div element object
    let cardHTML = `
    <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${arr[i].imgUrl}"
            class="img-fluid rounded-start"
            alt="${arr[i].imgAltText}"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${arr[i].name}</h5>
            <p class="card-text">
              ${arr[i].description}
            </p>
            <p class="card-text">Price: $${arr[i].price}</p>
          </div>
        </div>
      </div>
    </div>`;
    card.innerHTML = cardHTML;
    listProductsDiv.append(card);
  }
}

addProductCards(products.products);
