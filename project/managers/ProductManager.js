const fs = require("fs");
const { get } = require("http");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }
  static id = 0;

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    ProductManager.id++;
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id,
    };

    try {
      const products = await this.getProducts();
      //validacion de code
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
          console.log(`This code ${code} already exist`);
          break;
        }
      }
      //insertamos el elemento
      this.products.push(product);
      //insertamos el file
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );
    } catch (error) {
      console.log(error);
    }
  };

  //metodo getproducts
  getProducts = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const data = await this.readProducts();
        return data;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  //busqueda por id
  getProductById = async (id) => {
    let respuesta2 = await this.readProducts();
    if (!respuesta2.find((product) => product.id === id)) {
      return console.log("Not found");
    } else {
      console.log("Correct Id");
    }
  };

  //eliminar producto por id

  deleteProduct = async (id) => {
    try {
      let respuesta = await this.readProducts();
      let filtrado = respuesta.filter((products) => products.id != id);
      await fs.promises.writeFile(this.path, JSON.stringify(filtrado));
      console.log("eliminado");
    } catch (error) {
      console.log(error);
    }
  };

  //actualizar productos

  updateProducts = async ({ id, ...product }) => {
    try {
      await this.deleteProduct(id);
      let productPast = await this.readProducts();
      let productModified = [{ id, ...product }, ...productPast];
      console.log(productModified);
    } catch (error) {
      console.log(error);
    }
  };

  // lectura de productos

  readProducts = async () => {
    let respuesta = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(respuesta);
  };
}

module.exports = {
  ProductManager,
};
