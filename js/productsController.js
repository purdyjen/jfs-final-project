console.log("Controller connected!");
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
