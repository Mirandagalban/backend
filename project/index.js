const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager("./files/products.json");

const env = async () => {
  const productsEnv = await manager.getProducts();
  console.log(productsEnv);

  /*await manager.addProduct(
    "producto prueba",
    "este es un producto de prueba",
    200,
    "no img",
    "abc123",
    25
  );

  let productsResult = await manager.getProducts();
  console.log(productsResult);
  await manager.addProduct(
    "producto 3",
    "este es un producto de prueba",
    200,
    "no img",
    "abc124",
    25
  );
  productsResult = await manager.getProducts();
  console.log(productsResult);
  const getProd = await manager.getProductById(2);
  console.log(getProd);
    const deleteItem = await manager.deleteProduct(1);
  console.log(deleteItem);

  const update= await manager.updateProducts()*/
};

env();
