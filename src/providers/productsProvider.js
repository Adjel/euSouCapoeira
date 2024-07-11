import { categories } from "./categoriesProvider";
import music from "../../public/fakeCatsImages/music.jpg";
import clothes from "../../public/fakeCatsImages/clothes.jpg";

export const products = [
  {
    subCategory: "berimbau Viola",
    products: [
      {
        name: "berimbau Viola par Mestre Foguete",
        image: music,
        alt: "",
        price: 60,
        rate: 3,
        rateNbr: 5,
        availability: "now",
        id: "123454",
        date: new Date(),
        isBestSeller: true,
        comments: [
          {
            author: "goku",
            date: new Date(),
            rating: 3,
            comment: "Il sonne trop bien",
          },
          {
            author: "Pernalonga",
            date: new Date(),
            rating: 3,
            comment: "Je n'arrive pas à l'accorder, comment faire ?",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3,
            comment: "Cool, est-ce qu'il y a aussi des medios ?",
          },
        ],
      },
      {
        name: "berimbau Gunga fabriqué au Brésil",
        image: music,
        alt: "",
        price: 59.99,
        rate: 5,
        rateNbr: 15,
        availability: "now",
        id: "321454",
        date: new Date(),
        isBestSeller: false,
        comments: [
          {
            author: "Laïa",
            date: new Date(),
            rating: 3,
            comment: "Il sonne vraiment bien",
          },
          {
            author: "Pixote",
            date: new Date(),
            rating: 3,
            comment: "E bom !",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3,
            comment: "Cool, est-ce qu'il y a aussi des medios ?",
          },
        ],
      },
      {
        name: "berimbau Viola fait avec du bois de Noisetié",
        image: music,
        alt: "",
        price: 29.9,
        rate: 4.5,
        rateNbr: 8,
        availability: "command",
        id: "123444",
        date: new Date(),
        isBestSeller: false,
        comments: [
          {
            author: "Chama",
            date: new Date(),
            rating: 3,
            comment: "Super rapport qualité prix",
          },
          {
            author: "Babalo",
            date: new Date(),
            rating: 3,
            comment: "J'aime pas'",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3,
            comment: "Cool, est-ce qu'il y a aussi des medios ?",
          },
        ],
      },
    ],
  },
  {
    subCategory: "chaussures",
    products: [
      {
        name: "Chaussure Capoeira - Rainha VL2500 - Bleu-gris",
        image: clothes,
        alt: "",
        price: 57.79,
        rate: 2,
        rateNbr: 19,
        availability: "now",
        id: "123454",
        date: new Date(),
        isBestSeller: true,
        comments: [
          {
            author: "goku",
            date: new Date(),
            rating: 4.5,
            comment: "Il sonne trop bien",
          },
          {
            author: "Pernalonga",
            date: new Date(),
            rating: 5,
            comment: "Top à l'aise",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3.5,
            comment: "Ca a l'air solide on verra avec le temps",
          },
        ],
      },
      {
        name: "Chaussure Capoeira - Rainha VL2500 -Blanc-bleu ",
        image: clothes,
        alt: "",
        price: 57.69,
        rate: 3,
        rateNbr: 5,
        availability: "nostock",
        id: "321454",
        date: new Date(),
        isBestSeller: false,
        comments: [
          {
            author: "Laïa",
            date: new Date(),
            rating: 4,
            comment: "Bien bien",
          },
          {
            author: "Pixote",
            date: new Date(),
            rating: 2.5,
            comment: "Au top !",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3,
            comment: "Elles sont moins chères au Brésil nan ?",
          },
        ],
      },
      {
        name: "Chaussure Capoeira - Rainha VL2500 -Blanc-noir",
        image: clothes,
        alt: "",
        price: 59.6,
        rate: 5,
        rateNbr: 15,
        availability: "nostock",
        id: "321454",
        date: new Date(),
        isBestSeller: true,
        comments: [
          {
            author: "Laïa",
            date: new Date(),
            rating: 4,
            comment: "Bien bien",
          },
          {
            author: "Pixote",
            date: new Date(),
            rating: 2.5,
            comment: "Au top !",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3,
            comment: "Elles sont moins chères au Brésil nan ?",
          },
        ],
      },
      {
        name: "Chaussure Capoeira - Rainha VL2500 -Blanc-rouge",
        image: clothes,
        alt: "",
        price: 55,
        rate: 3,
        rateNbr: 5,
        availability: "command",
        id: "321454",
        date: new Date(),
        isBestSeller: false,
        comments: [
          {
            author: "Laïa",
            date: new Date(),
            rating: 4,
            comment: "Bien bien",
          },
          {
            author: "Pixote",
            date: new Date(),
            rating: 2.5,
            comment: "Au top !",
          },
          {
            author: "Tanjiro",
            date: new Date(),
            rating: 3,
            comment: "Elles sont moins chères au Brésil nan ?",
          },
        ],
      },
    ],
  },
];