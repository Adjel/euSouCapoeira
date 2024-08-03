// mock API with local storage

//////////////////// USER ///////////////////////////////////

export const mockUserToken = async ({ email, password }) => {
  const users = await getMockedApi();
  console.log(users);
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
    return Promise.reject(
      new Error("Mise à jour impossible car l'utilisateur est introuvable")
    );

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

  localStorage.setItem("users", JSON.stringify(newUsers));
  return Promise.resolve(newUser);
};

/////////////////////// ADDRESS ///////////////////////////////

export const mockAddAdress = async (currentUser, newAddress) => {
  const existingUser = await getExistingUser(currentUser);

  if (!existingUser)
    return Promise.reject(
      new Error(
        "Impossible d'ajouter l'adresse car l'utilisateur est introuvable"
      )
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

  const users = await getMockedApi();

  const newUsers = users.map((user) =>
    user.email === updatedUser.email ? updatedUser : user
  );

  console.log(newUsers);
  localStorage.setItem("users", JSON.stringify(newUsers));
  return Promise.resolve(updatedUser);
};

export const mockDeleteAddress = async (currentUser, adressDate) => {
  const existingUser = await getExistingUser(currentUser);
  const users = await getMockedApi();

  if (!existingUser)
    return Promise.reject(
      new Error(
        "Impossible de supprimer l'adresse car l'utilisateur est introuvable"
      )
    );

  if (
    !existingUser.addresses.find((a) => {
      console.log(a.date);
      console.log(adressDate);
      console.log(new Date(a.date));
      console.log(new Date(adressDate));
      return `${new Date(a.date)}` === `${new Date(adressDate)}`;
    })
  )
    return Promise.reject(
      new Error("Suppression de l'adresse impossible car elle est introuvable")
    );

  // We have found the adress to delete, now we have to verify if the address is not current or the last one
  if (!existingUser.addresses > 1)
    return Promise.reject(
      new Error(
        "Suppression impossible, vous devez avoir au moins une adresse liée à ce compte"
      )
    );

  if (
    existingUser.addresses.find(
      (address) =>
        `${new Date(address.date)}` === `${new Date(adressDate)}` &&
        address.isCurrent
    )
  )
    return Promise.reject(
      new Error(
        "Suppression de l'adresse principale impossible, veuillez changer ou créer l'adresse principale"
      )
    );

  const updatedUser = {
    ...currentUser,
    addresses: existingUser.addresses.filter(
      (address) => `${new Date(address.date)}` !== `${new Date(adressDate)}`
    ),
  };

  const newUsers = users.map((user) => {
    if (user.id === updatedUser.id) {
      return updatedUser;
    } else {
      return user;
    }
  });

  console.log(newUsers);
  localStorage.setItem("users", JSON.stringify(newUsers));
  return Promise.resolve(updatedUser);
};

export const mockUpdateAdress = async (currentUser, date) => {
  const existingUser = await getExistingUser(currentUser);
  const users = await getMockedApi();

  if (!existingUser)
    return Promise.reject(new Error("Impossible d'ajouter l'adresse"));

  const addresses = existingUser.addresses.map((a) => {
    if (a.date === date) {
      return {
        ...a,
        isCurrent: true,
      };
    } else {
      return {
        ...a,
        isCurrent: false,
      };
    }
  });

  const updatedUser = {
    ...currentUser,
    addresses: addresses,
  };

  const newUsers = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );

  localStorage.setItem("users", JSON.stringify(newUsers));
  return Promise.resolve(updatedUser);
};

////////////////////// UTILS //////////////////////////

const getMockedApi = async () => {
  //localStorage.clear()
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

const compareDates = (date1, date2) => {
  return new Date(date1) === new Date(date2);
};
