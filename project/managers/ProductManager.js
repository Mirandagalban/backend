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

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    try {
      const products = await this.getProducts();
      // creacion de id
      if (this.products.length == 0) {
        product.id = 1;
      } else {
        product.id = this.products.id + 1;
      }
      //validacion de code
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
          console.log(`This code ${code} already exist`);
          break;
        }
      }
      //insertamos el elemento
      products.push(product);
      //insertamos el file
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(products, null, "\t")
      );
    } catch (error) {
      console.log(error);
    }
  };

  deleteProduct = async (product) => {
    try {
      if (id === product.id) {
        await fs.promises.unlink(product);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
/*
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

//testing pre entrega 2
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
console.log(manejadorProductos.getProducts());*/

module.exports = {
  ProductManager,
};
