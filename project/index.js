const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager("./files/products.json");

const env = async () => {
  const productsEnv = await manager.getProducts();
  console.log(productsEnv);

  const productoTest = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "sin imagen",
    code: "abc123",
    stock: 25,
  };

  await manager.addProduct(productoTest);

  const productsResult = await manager.getProducts();
  console.log(productsResult);
};

env();
const manejadorProductos = new ProductManager();
manejadorProductos.getProducts();
console.log(manejadorProductos.products);
manejadorProductos.addProduct();
console.log(manejadorProductos.getProducts());
