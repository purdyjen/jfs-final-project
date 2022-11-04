console.log("Controller connected!");
// import { loadProductsFromLS } from "./products.js";

export default class ProductsController {
  constructor(currentId = 0) {
    this.products = [];
    this.currentId = currentId;
  }

  getDate() {
    const d = new Date();
    let month = (d.getUTCMonth() + 1).toString();
    let date = d.getUTCDate().toString();
    let year = d.getFullYear().toString();

    if (date < 10) {
      date = "0" + date;
    }

    return month + "-" + date + "-" + year;
  }

  loadProductsFromLS = () => {
    let productsFromLS = JSON.parse(localStorage.getItem("products")) || [];

    if (productsFromLS.length === 0) {
      productsFromLS = [
        {
          createdAt: "11-04-2022",
          description: "Don't forget to feed your precious fur babies.",
          id: 0,
          imgAltText: "A white bowl with cute cat ears full of cat food",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/03/24/08/27/cat-2170495_1280.jpg",
          name: "Brand Name Cat Food",
          price: 15,
        },
        {
          createdAt: "11-04-2022",
          description: "Because dogs are ALWAYS starving.",
          id: 1,
          imgAltText: "A white bowl with green edges full of dog food",
          imgUrl:
            "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
          name: "Brand Name Dog Food",
          price: 15,
        },
        {
          createdAt: "11-04-2022",
          description: "Who's a good boy?? You're a good boy!",
          id: 2,
          imgAltText: "A colorful variety of bone-shaped dog treats",
          imgUrl:
            "https://cdn.pixabay.com/photo/2014/05/21/18/08/dog-bones-350092_1280.jpg",
          name: "Brand Name Dog Treats",
          price: 10,
        },
      ];
      localStorage.setItem("products", JSON.stringify(productsFromLS));
    } else {
      this.products = productsFromLS;
    }
    return productsFromLS;
  };

  saveProductsToLS = () => {
    localStorage.setItem("products", JSON.stringify(this.products));
  };

  addProduct(name, description, imgUrl, imgAltText, price) {
    const product = {
      id: this.currentId++,
      name: name,
      description: description,
      imgUrl: imgUrl,
      imgAltText: imgAltText,
      price: price,
      createdAt: this.getDate(),
    };
    this.products.push(product);
  }
}
