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
          imgUrl: "/images/products/cat-2170495_640.jpg",
          name: "Brand Name Cat Food",
          price: 15,
        },
        {
          createdAt: "11-04-2022",
          description: "Because dogs are ALWAYS starving.",
          id: 1,
          imgAltText: "A white bowl with green edges full of dog food",
          imgUrl: "/images/products/dog-food-5168940_640.jpg",
          name: "Brand Name Dog Food",
          price: 15,
        },
        {
          createdAt: "11-04-2022",
          description: "Who's a good boy?? You're a good boy!",
          id: 2,
          imgAltText: "A colorful variety of bone-shaped dog treats",
          imgUrl: "/images/products/dog-bones-350092_640.jpg",
          name: "Brand Name Dog Treats",
          price: 10,
        },
      ];
      localStorage.setItem("products", JSON.stringify(productsFromLS));
    }
    return productsFromLS;
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
