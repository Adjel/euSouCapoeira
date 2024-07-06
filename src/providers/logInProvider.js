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
            street: "10 rue du vent",
            zipCode: "41000",
            city: "Dally",
            country: "Thailand",
          },
          {
            date: tomorrow,
            isCurrent: true,
            firstName: "Jean",
            lastName: "toupie",
            street: "12 rue de la montagne",
            zipCode: "70000",
            city: "David",
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
  const yesterday = new Date(currentDate - 1);
  tomorrow.setDate(currentDate.getDate() + 1);
  return {
    firstName: "Patrick",
    lastName: "toupie",
    email: "P-toupie@toto.com",
    addresses: [
      {
        date: yesterday,
        isCurrent: false,
        firstName: "Patrick",
        lastName: "toupie",
        street: "10 rue du vent",
        zipCode: "41000",
        city: "Dally",
        country: "Thailand",
      },
      {
        date: tomorrow,
        isCurrent: true,
        firstName: "Jean",
        lastName: "toupie",
        street: "12 rue de la montagne",
        zipCode: "70000",
        city: "David",
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
