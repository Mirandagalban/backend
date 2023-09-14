const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager("./files/products.json");

const env = async () => {
  const productsEnv = await manager.getProducts();
  console.log(productsEnv);

  const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "sin imagen",
    code: "abc123",
    stock: 25,
  };

  await manager.addProduct(newProduct);

  const productsResult = await manager.getProducts();
  console.log(productsResult);
};

env();
