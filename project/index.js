const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager("./files/products.json");

const env = async () => {
  const productsEnv = await manager.getProducts();
  console.log(productsEnv);

  await manager.addProduct(
    "producto prueba",
    "este es un producto de prueba",
    200,
    "no img",
    "abc123",
    25
  );

  const productsResult = await manager.getProducts();
  console.log(productsResult);
};

env();
