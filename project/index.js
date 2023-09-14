const { ProductManager } = require("./managers/ProductManager");

const manager = new ProductManager("./files/products.json");

const env = async () => {
  const users = await manager.getUsers();
  console.log(users);

  const user = {
    nombre: "Miranda",
    apellido: "Galban",
    edad: 26,
    curso: "backend",
  };
  await manager.createUser(user);

  const usersResult = await manager.getUsers();
  console.log(usersResult);
};

env();
