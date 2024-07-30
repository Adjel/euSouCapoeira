import clothes from "../../public/fakeCatsImages/clothes.jpg";
import music from "../../public/fakeCatsImages/music.jpg";

export const commands = [
  {
    products: [
      {
        //TODO Have to be a product here
        name: "chaussures Rainha",
        imageSrc: clothes,
        alt: "",
        id: "111111111",
      },
      {
        name: "berimbau viola",
        imageSrc: music,
        alt: "",
        id: "222222222",
      },
    ],
    date: new Date(),
    commandId: "201742.206632",
    totalPrice: 50.23,
    status: "processed",
    // Wanted to be an addressId (and fetch it by user), but we have to save the adress itsel in case of the address is deleted in user
    deliveryAddress: {
      firstName: "Patrick",
      lastName: "toupie",
      street: "10 rue du vent",
      zipCode: "41000",
      city: "Dally",
      country: "Thailand",
    },
  },
  {
    products: [
      {
        name: "berimbau viola",
        imageSrc: music,
        alt: "",
        id: "222222222",
      },
      {
        name: "berimbau medio",
        imageSrc: music,
        alt: "",
        id: "333333333",
      },
    ],
    date: new Date(),
    commandId: "202149.205632",
    totalPrice: 150.33,
    status: "processed",
    deliveryAddress: {
      firstName: "Jean",
      lastName: "toupie",
      street: "12 rue de la montagne",
      zipCode: "70000",
      city: "David",
      country: "Panama",
    },
  },
  {
    products: [
      {
        name: "berimbau viola",
        imageSrc: music,
        alt: "",
        id: "222222222",
      },
      {
        name: "berimbau medio",
        imageSrc: music,
        alt: "",
        id: "333333333",
      },
    ],
    date: new Date(),
    commandId: "202449.205632",
    totalPrice: 150.33,
    status: "under treatment",
    deliveryAddress: {
      firstName: "Jean",
      lastName: "toupie",
      street: "12 rue de la montagne",
      zipCode: "70000",
      city: "David",
      country: "Panama",
    },
  },
];
