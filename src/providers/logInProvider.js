const createAccount = async ({ email, password }) => {
  // have to await here
  if (email && password)
    return {
      user: {
        firstName: "ad",
        lastName: "tou",
        email: "toto@toto.com",
        adress: [
          {
            nbrAndStreet: "10",
            codeAndCity: "41000 Dally",
            country: "Thailand",
          },
        ],
        commands: [
          {
            date: "",
            articles: [],
            totalPrice: "",
          },
        ],
      },
    };
};

export default createAccount;
