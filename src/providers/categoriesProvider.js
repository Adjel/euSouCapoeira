import clothes from "../../public/fakeCatsImages/clothes.jpg";
import entrain from "../../public/fakeCatsImages/entrain.jpg";
import music from "../../public/fakeCatsImages/music.jpg";

export const categories = [
  {
    image: clothes,
    alt: "catégorie vêtements",
    title: "vêtements",
    subCategories: [
      {
        name: "chaussures",
        image: clothes,
        alt: "une image représentant la catégorie chaussures",
        productNbr: 5,
      },

      {
        name: "cordes",
        image: clothes,
        alt: "une image représentant la catégorie cordes de grades",
        productNbr: 3,
      },

      {
        name: "t-shirt",
        image: clothes,
        alt: "une image représentant la catégorie t-shirt",
        productNbr: 5,
      },

      {
        name: "pantalon",
        image: clothes,
        productNbr: 15,
      },
    ],
  },
  {
    image: entrain,
    alt: "catégorie entraînements",
    title: "entraînements",
    subCategories: [
      {
        name: "frappe",
        image: entrain,
        alt: "une image représentant la catégorie équipement d'arts martiaux",
        productNbr: 2,
      },
    ],
  },
  {
    image: music,
    alt: "catégorie instruments",
    title: "instruments",
    subCategories: [
      {
        name: "berimbau Gunga",
        image: music,
        alt: "une image représentant la catégorie berimbau gunga",
        productNbr: 2,
      },
      {
        name: "berimbau Medio",
        image: music,
        alt: "une image représentant la catégorie berimbau medio",
        productNbr: 2,
      },
      {
        name: "berimbau Viola",
        image: music,
        alt: "une image représentant la catégorie berimbau viola",
        productNbr: 2,
      },
      {
        name: "Atabaque",
        image: music,
        alt: "une image représentant la catégorie atabaque",
        productNbr: 6,
      },
      {
        name: "pandeiro",
        image: music,
        alt: "une image représentant la catégorie pandeiro",
        productNbr: 4,
      },
      {
        name: "Reco reco",
        image: music,
        alt: "une image représentant la catégorie reco reco",
        productNbr: 2,
      },
      {
        name: "Agogo",
        image: music,
        alt: "une image représentant la catégorie agogo",
        productNbr: 3,
      },
    ],
  },
  {
    image: music,
    alt: "catégorie Livres",
    title: "livres",
    subCategories: [],
  },
  {
    image: music,
    alt: "catégorie ésotérisme",
    title: "ésotérisme",
    subCategories: [],
  },
];
