const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager("./files/products.json");

const env = async () => {
  const productsEnv = await manager.getProducts();
  console.log(productsEnv);
};

env();
