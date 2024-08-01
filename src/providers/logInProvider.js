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

  if (users.find((existingUser) => existingUser.email === user.email)) {
    return Promise.reject(
      new Error(`Cette adresse e-mail est déjà enregistrée`)
    );
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return Promise.resolve(user);
};

const getMockedApi = async () => {
  return await JSON.parse(localStorage.getItem("users") || []);
};
