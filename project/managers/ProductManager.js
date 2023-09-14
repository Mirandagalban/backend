const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  //metodo getproducts
  getProducts = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, "utf-8");
        const productsGetProducts = JSON.parse(data);
        return productsGetProducts;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  //busqueda por id
  getProductById = (id) => {
    if (!this.products.find((product) => product.id === id)) {
      return console.log("Not found");
    } else {
      console.log("Correct Id");
    }
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    //validacion de code
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`This code ${code} already exist`);
        break;
      }
    }
    // creacion de id
    if (this.products.length == 0) {
      product.id = 1;
    } else {
      product.id = this.products.id + 1;
    }
    this.products.push(product);
  };
}

//testing
const manejadorProductos = new ProductManager();
manejadorProductos.getProducts();
console.log(manejadorProductos.products);
manejadorProductos.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25
);
console.log(manejadorProductos.getProducts());
manejadorProductos.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25
);
manejadorProductos.getProductById(1);
manejadorProductos.getProductById(4);

export default ProductManager;
