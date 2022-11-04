console.log("Controller connected!");
export default class ProductsController {
  constructor(currentId = 0) {
    this.products = [];
    this.currentId = currentId;
  }

  getDate() {
    const d = new Date();
    let month = d.getUTCMonth().toString();
    let date = d.getUTCDate().toString();
    let year = d.getFullYear().toString();

    if (date < 10) {
      date = "0" + date;
    }

    return month + "-" + date + "-" + year;
  }

  addProduct(name, description, img, price) {
    const product = {
      id: this.currentId++,
      name: name,
      description: description,
      img: img,
      price: price,
      createdAt: this.getDate(),
    };
    this.products.push(product);
  }
}
