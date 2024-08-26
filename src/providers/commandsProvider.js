export const createUserCommand = async (productList, user) => {
  console.log(productList);

  const total = 0;
  let totalPrice = productList.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    total
  );

  const address = user.addresses.find((address) => address.isCurrent === true);
  if (!address) {
    return Promise.reject(
      new Error(
        "Impossible de valider la panier, veuiller vérifier que vous avez bien selectionné une adresse principale dans vos adresses"
      )
    );
  }

  const command = {
    productList: [...productList],
    userId: user.id,
    date: new Date(),
    id: crypto.randomUUID(),
    totalPrice: totalPrice,
    status: "processed",
    deliveryAddress: address,
  };

  try {
    const commands = JSON.parse(localStorage.getItem("commands")) || [];

    const newCommands = [...commands, command];

    localStorage.setItem("commands", JSON.stringify(newCommands));

    return Promise.resolve(newCommands);
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

export const getUserCommands = async (user) => {
  try {
    const commands = JSON.parse(localStorage.getItem("commands"));
    let userCommands;

    if (commands) {
      userCommands = commands.filter((command) => command.userId === user.id);
    }

    return Promise.resolve(userCommands);
  } catch (error) {
    return Promise.reject(`Can't get user commands: ${error.message}`);
  }
};
