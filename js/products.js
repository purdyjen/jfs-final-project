console.log("products.js connected!");
import ProductsController from "./ProductsController.js";
const products = new ProductsController();

const loadedProducts = products.loadProductsFromLS();
const listProductsDiv = document.getElementById("list-products");

function addProductCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
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
addProductCards(loadedProducts);
