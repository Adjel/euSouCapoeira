export const createUserCommand = async (productList, user) => {
  console.log(productList);
  console.log(user);

  const total = 0;
  let totalPrice = productList.reduce(
    (totalPrice, product) => totalPrice + product.price,
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

  console.log(totalPrice);
  console.log(address);

  const command = {
    productList: [...productList],
    userId: user.id,
    date: new Date(),
    id: crypto.randomUUID(),
    totalPrice: totalPrice,
    status: "processed",
    deliveryAddress: address,
  };

  console.log(command);

  try {
    const commands = JSON.parse(localStorage.getItem("commands")) || [];

    const newCommands = [...commands, command];
    console.log(newCommands);
    localStorage.setItem("commands", JSON.stringify(command));

    return Promise.resolve(newCommands);
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};
