const createAccount = async ({ email, password }) => {
  // have to await here
  if (email && password) {
    return {
      user: {
        firstName: "Patrick",
        lastName: "toupie",
        email: "P-toupie@toto.com",
        addresses: [
          {
            date: currentDate,
            isCurrent: false,
            firstName: "Patrick",
            lastName: "toupie",
            nbrAndStreet: "10 rue du vent",
            codeAndCity: "41000 Dally",
            country: "Thailand",
          },
          {
            date: tomorrow,
            isCurrent: true,
            firstName: "Jean",
            lastName: "toupie",
            nbrAndStreet: "12 rue de la montagne",
            codeAndCity: "70000 David",
            country: "Panama",
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
  }
};

// Have to be deleted because it's a mock
export async function mockUser() {
  const currentDate = new Date();

  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  return {
    firstName: "Patrick",
    lastName: "toupie",
    email: "P-toupie@toto.com",
    addresses: [
      {
        date: currentDate,
        isCurrent: false,
        firstName: "Patrick",
        lastName: "toupie",
        nbrAndStreet: "10 rue du vent",
        codeAndCity: "41000 Dally",
        country: "Thailand",
      },
      {
        date: tomorrow,
        isCurrent: true,
        firstName: "Jean",
        lastName: "toupie",
        nbrAndStreet: "12 rue de la montagne",
        codeAndCity: "70000 David",
        country: "Panama",
      },
    ],
    commands: [
      {
        date: "",
        articles: [],
        totalPrice: "",
      },
    ],
  };
}

export default createAccount;
