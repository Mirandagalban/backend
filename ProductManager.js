class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    // creacion de id
    if (this.products.length == 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.product.length - 1].id + 1;
    }
    this.products.push(product);
  };
  //busqueda por id
  getProductById = (id) => {
    if (!this.products.find((product) => product.id === id)) {
      return console.log("Not found");
    } else {
      console.log("Correct Id");
    }
  };
  //metodo getproducts
  getProducts = () => {
    return this.products;
  };
}
