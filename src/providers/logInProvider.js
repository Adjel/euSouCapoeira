// mock API with local storage
export const mockUserToken = async ({ email, password }) => {
  const users = await getMockedApi();
  const user = users.find(
    (item) => item.password === password && item.email === email
  );
  if (user) return Promise.resolve(user);
  else
    return Promise.reject(new Error("L'email ou le mot de passe est invalide"));
};

export const mockCreateAccount = async (user) => {
  const users = await getMockedApi();
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

  return Promise.resolve(newUser);
};

export const mockAddAdress = async (currentUser, newAddress) => {
  const existingUser = await getExistingUser(currentUser);

  if (!existingUser)
    return Promise.reject(new Error("Impossible d'ajouter l'adresse"));

  const updatedUser = {
    ...currentUser,
    addresses: [...currentUser.addresses, newAddress],
  };

  return Promise.resolve(updatedUser);
};

const getMockedApi = async () => {
  return await JSON.parse(localStorage.getItem("users") || []);
};

const getExistingUser = async (user) => {
  const users = await getMockedApi();
  return users.find((u) => u.email === user.email);
};
