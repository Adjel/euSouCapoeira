const createAccount = async ({ email, password }) => {
  // have to await here
  if (email && password)
    return {
      user: {
        firstName: "ad",
        lastName: "tou",
        email: "toto@toto.com",
        adress: {
          adress1: "",
        },
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
