import clothes from "../../public/fakeCatsImages/clothes.jpg";
import music from "../../public/fakeCatsImages/music.jpg";
import entrain from "../../public/fakeCatsImages/entrain.jpg";
import livretexpressao from "../../public/fakeApi/livretexpressao.jpg";
import tshirt_femme_capoeira_carybe from "../../public/fakeApi/vetements/tshirt/tshirt_femme_capoeira_carybe.jpeg";
import tshirt_fb_femme_capoeira_carybe from "../../public/fakeApi/vetements/tshirt/tshirt_fb_femme_capoeira_carybe.jpeg";
import pantalon_capoeira_noir_jamaique_face from "../../public/fakeApi/vetements/pantalon/pantalon_capoeira_noir_jamaique_face.jpeg";
import abada_capoeira_blanc_jamaica_side from "../../public/fakeApi/vetements/pantalon/abada_capoeira_blanc_jamaica_side.jpeg";
import abada_capoeira_blanc_jamaica from "../../public/fakeApi/vetements/pantalon/abada_capoeira_blanc_jamaica.jpeg";

export const products = [
  {
    name: "Sac de frappeSac de Frappe FIGHTR® Premium 120x35cm avec chaîne Lourde",
    price: 69.9,
    availability: "now",
    id: "9877807655684321234",
    date: new Date().toISOString(),
    isBestSeller: true,
    specs: [
      "Poids:",
      "Hauteur",
      "Largeur",
      "Composé de sable et coton",
      "Conteneur en cuir",
    ],
    variants: [],

    images: [{ image: entrain, alt: "un sac de frappe" }],
  },
  {
    name: "ABADA DE CAPOEIRA BLANC - JAMAICA",
    price: 47.94,
    availability: "now",
    id: "304a",
    date: new Date().toISOString(),
    isBestSeller: false,
    specs: [
      "Marque : Capoeira Casual",
      "Matériau : Coton",
      "Couleur : Beige",
      "Tailles : M, L, XL",
      "Ceinture : Élastique avec cordon",
    ],
    sizes: [],
    variants: [
      {
        id: "304b",
        image: pantalon_capoeira_noir_jamaique_face,
        alt: "un abada noir de style jamaica",
      },
    ],
    images: [
      {
        image: abada_capoeira_blanc_jamaica,
        alt: "Abada blanc jamaica de face",
      },
      {
        image: abada_capoeira_blanc_jamaica_side,
        alt: "Abada blanc jamaica de coté",
      },
    ],
  },
  {
    name: "Livre Expressao - Édition Spéciale",
    price: 12.75,
    availability: "now",
    id: "555577778888",
    date: new Date().toISOString(),
    isBestSeller: false,
    specs: [
      "Auteur : Y",
      "Éditeur : Z",
      "Pages : 200",
      "Langue : Français",
      "Format : Broché",
    ],
    variants: [{ id: "555577779999", image: livretexpressao, alt: "Vue 1" }],
    images: [{ image: livretexpressao, alt: "Livre Expressao vue" }],
  },
  {
    name: "Chaussures Capoeira - Rainha VL2500 Bleu-Gris",
    price: 57.71,
    availability: "now",
    id: "12345456789",
    date: new Date().toISOString(),
    isBestSeller: true,
    specs: [
      "Marque : Rainha Volei VL 2500",
      "Semelle intérieure : Textile",
      "Semelle extérieure : Caoutchouc latex avec nervures antidérapantes",
      "Matériau supérieur : Toile 100 % coton",
      "Interne : Textile",
    ],
    variants: [
      { id: "111111112", image: clothes, alt: "Vue 1" },
      { id: "222222223", image: clothes, alt: "Vue 2" },
    ],
    images: [
      { image: clothes, alt: "Chaussure Capoeira bleu-gris vue 1" },
      { image: clothes, alt: "Chaussure Capoeira bleu-gris vue 2" },
    ],
  },
  {
    name: "TSHIRT FEMME CAPOEIRA - CARYBÉ BLEU",
    price: 28.0,
    availability: "now",
    id: "204a",
    date: new Date().toISOString(),
    isBestSeller: false,
    specs: [
      "Marque : Capoeira Style",
      "Matériau : 100% coton",
      "Couleur : Rouge",
      "Tailles : S, M, L, XL",
      "Impression : Graphique",
    ],
    sizes: [],
    variants: [
      {
        id: "204b",
        image: tshirt_fb_femme_capoeira_carybe,
        alt: "photo du t shirt d'une autre couleur",
      },
    ],
    images: [
      {
        image: tshirt_fb_femme_capoeira_carybe,
        alt: "T-shirt femme CARYBÉ porté sur fond blanc",
      },
      {
        image: tshirt_femme_capoeira_carybe,
        alt: "T-shirt femme CARYBÉ porté par un manequin",
      },
    ],
  },
  {
    name: "Berimbau Viola - Bois de Noisetié",
    price: 29.9,
    availability: "command",
    id: "12344409876",
    date: new Date().toISOString(),
    isBestSeller: false,
    specs: [
      "Matériau : Bois de Noisetié",
      "Inclus : Corde et baqueta",
      "Dimensions : Standard",
      "Poids : Léger",
      "Fait main",
    ],
    variants: [
      { id: "123454", image: music, alt: "Vue 1" },
      { id: "321454", image: music, alt: "Vue 2" },
    ],
    images: [
      { image: music, alt: "Berimbau Viola bois de Noisetié vue 1" },
      { image: music, alt: "Berimbau Viola bois de Noisetié vue 2" },
    ],
  },
];

export const newProducts = products;
