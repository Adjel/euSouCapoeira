// mock API with local storage
export const mockUserToken = async ({ email, password }) => {
  const users = await getMockedApi();
  const user = users.find(
    (item) => item.password === password && item.email === email
  );
  console.log(users);
  if (user) return Promise.resolve(user);
  else
    return Promise.reject(new Error("L'email ou le mot de passe est invalide"));
};

export const mockCreateAccount = async (user) => {
  const users = await getMockedApi();
  console.log(users);

  const existingUser = await getExistingUser(user);

  if (existingUser) {
    return Promise.reject(
      new Error(`Cette adresse e-mail est déjà enregistrée`)
    );
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return Promise.resolve(user);
};

export const mockUpdateUser = async (currentUser, updatedUser) => {
  const existingUser = await getExistingUser(currentUser);

  if (!existingUser)
    return Promise.reject(new Error("Utilisateur introuvable"));

  const newUser = {
    ...existingUser,
    ...updatedUser,
  };

  const users = await JSON.parse(localStorage.getItem("users") || []);

  const newUsers = users.map((u) => {
    if (u.email === newUser.email) {
      return newUser;
    } else {
      return u;
    }
  });

  console.log(newUsers);
  localStorage.setItem("users", JSON.stringify(newUsers));
  return Promise.resolve(newUser);
};

export const mockAddAdress = async (currentUser, newAddress) => {
  const existingUser = await getExistingUser(currentUser);

  if (!existingUser)
    return Promise.reject(
      new Error("Impossible d'ajouter l'adresse : utilisateur inexistant")
    );

  /*
      const addressExists = existingUser.addresses.some((address) => 
      ['firstName', 'lastName', 'street', 'zipCode', 'city', 'country'].every(
        (key) => address[key] === newAddress[key]
      )
    );
    */

  if (
    existingUser.addresses.find(
      (a) =>
        a.firstName === newAddress.firstName &&
        a.lastName === newAddress.lastName &&
        a.street === newAddress.street &&
        a.zipCode === newAddress.zipCode &&
        a.city === newAddress.city &&
        a.country === newAddress.country
    )
  )
    return Promise.reject(
      new Error("Impossible d'ajouter deux fois la même adresse")
    );

  const updatedUser = {
    ...currentUser,
    addresses: [...currentUser.addresses, newAddress],
  };

  const users = getMockedApi();

  const newUsers = users.map((user) =>
    user.email === updatedUser.email ? updatedUser : user
  );

  localStorage.setItem("users", JSON.stringify(newUsers));
  return Promise.resolve(updatedUser);
};

export const mockUpdateAdress = async (currentUser, date) => {
  const existingUser = await getExistingUser(currentUser);

  if (!existingUser)
    return Promise.reject(new Error("Impossible d'ajouter l'adresse"));

  console.log(existingUser.addresses);

  const addresses = existingUser.addresses.map((a) => {
    if (a.date === date) {
      return {
        ...a,
        isCurrent: true,
      };
    } else {
      return a;
    }
  });

  const updatedUser = {
    ...currentUser,
    addresses: addresses,
  };

  return Promise.resolve(updatedUser);
};

const getMockedApi = async () => {
  try {
    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = [];
      localStorage.setItem("users", JSON.stringify(users));
    }
    return users;
  } catch (e) {
    throw new Error("Erreur lors de la récupération des utilisateurs");
  }
};

const getExistingUser = async (user) => {
  const users = await getMockedApi();
  return users.find((u) => u.email === user.email);
};
