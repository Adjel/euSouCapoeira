import React from "react";
import clothes from "../../public/fakeCatsImages/clothes.jpg";
import music from "../../public/fakeCatsImages/music.jpg";

export const commands = [
  {
    products: [
      {
        imageSrc: clothes,
        alt: "",
        id: "",
      },
    ],
    date: new Date(),
    id: "201742.206632",
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
        imageSrc: music,
        alt: "",
        id: "",
      },
      {
        imageSrc: music,
        alt: "",
        id: "",
      },
    ],
    date: new Date(),
    id: "202449.205632",
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
