import music from "../../public/fakeCatsImages/music.jpg";
import clothes from "../../public/fakeCatsImages/clothes.jpg";
import livreBatuque from "../../public/fakeApi/livreBatuque.jpg";
import livreBatuqueBack from "../../public/fakeApi/livreBatuqueBack.jpg";
import livreBatuqueOpen from "../../public/fakeApi/livreBatuqueOpen.jpg";
import livretexpressao from "../../public/fakeApi/livretexpressao.jpg";
import entrain from "../../public/fakeCatsImages/entrain.jpg";

export const products = [
  {
    subCategory: "berimbau viola",
    products: [
      {
        name: "Berimbau Gunga - Mestre Foguete Edition",
        price: 60.0,
        availability: "now",
        id: "123454123454123454123454123454",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bois",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Fait main",
        ],
        variants: [
          { id: "1234540987667890123123321", image: music, alt: "Vue 1" },
        ],
        images: [
          { image: music, alt: "Berimbau Viola vue 1" },
          { image: music, alt: "Berimbau Viola vue 2" },
        ],
      },
      {
        name: "Berimbau Viola - Mestre Foguete Edition",
        price: 60.0,
        availability: "now",
        id: "1234540987667890123123321",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bois",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Fait main",
        ],
        variants: [
          { id: "123454123454123454123454123454", image: music, alt: "Vue 1" },
        ],
        images: [
          { image: music, alt: "Berimbau Viola vue 1" },
          { image: music, alt: "Berimbau Viola vue 2" },
        ],
      },
      {
        name: "Berimbau Gunga - Edition Brésil",
        price: 59.99,
        availability: "now",
        id: "321454",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Matériau : Bois de qualité",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Modéré",
          "Fabriqué au Brésil",
        ],
        variants: [
          { id: "123455", image: music, alt: "Vue 1" },
          { id: "12344409878", image: music, alt: "Vue 2" },
        ],
        images: [
          { image: music, alt: "Berimbau Gunga vue 1" },
          { image: music, alt: "Berimbau Gunga vue 2" },
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
    ],
  },
  {
    subCategory: "chaussures",
    products: [
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
        name: "Chaussures Capoeira - Rainha VL2500 Blanc-Bleu",
        price: 57.69,
        availability: "nostock",
        id: "111111112",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Rainha Volei VL 2500",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc latex avec nervures antidérapantes",
          "Matériau supérieur : Toile 100 % coton",
          "Interne : Textile",
        ],
        variants: [
          { id: "222222223", image: clothes, alt: "Vue 1" },
          { id: "333333334", image: clothes, alt: "Vue 2" },
        ],
        images: [
          { image: clothes, alt: "Chaussure Capoeira blanc-bleu vue 1" },
        ],
      },
      {
        name: "Chaussures Capoeira - Rainha VL2500 Blanc-Noir",
        price: 59.6,
        availability: "nostock",
        id: "222222223",
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
          { id: "333333334", image: clothes, alt: "Vue 1" },
          { id: "12345456790", image: clothes, alt: "Vue 2" },
        ],
        images: [
          { image: clothes, alt: "Chaussure Capoeira blanc-noir vue 1" },
        ],
      },
      {
        name: "Chaussures Capoeira - Rainha VL2500 Blanc-Rouge",
        price: 69.1,
        availability: "command",
        id: "3440066338822993",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Rainha Volei VL 2500",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc latex avec nervures antidérapantes",
          "Matériau supérieur : Toile 100 % coton",
          "Interne : Textile",
        ],
        variants: [
          { id: "111111113", image: clothes, alt: "Vue 1" },
          { id: "222222224", image: clothes, alt: "Vue 2" },
        ],
        images: [
          { image: clothes, alt: "Chaussure Capoeira blanc-rouge 1 vue 1" },
        ],
      },
      {
        name: "Chaussures Capoeira - Rainha VL2500 Rouge ",
        price: 69.25,
        availability: "command",
        id: "325476879801",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Rainha Volei VL 2500",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc latex avec nervures antidérapantes",
          "Matériau supérieur : Toile 100 % coton",
          "Interne : Textile",
        ],
        variants: [
          { id: "333333335", image: clothes, alt: "Vue 1" },
          { id: "12345456791", image: clothes, alt: "Vue 2" },
        ],
        images: [{ image: clothes, alt: "Chaussure Capoeira Gris" }],
      },
      {
        name: "Chaussures Capoeira - Rainha VL2500 Noir",
        price: 69.2,
        availability: "command",
        id: "333333333",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Rainha Volei VL 2500",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc latex avec nervures antidérapantes",
          "Matériau supérieur : Toile 100 % coton",
          "Interne : Textile",
        ],
        variants: [
          { id: "111111114", image: clothes, alt: "Vue 1" },
          { id: "222222225", image: clothes, alt: "Vue 2" },
        ],
        images: [{ image: clothes, alt: "Chaussure Capoeira Vert" }],
      },
    ],
  },
  {
    subCategory: "livres",
    products: [
      {
        name: "Livre Batuque - Vue Complet",
        price: 14.5,
        availability: "now",
        id: "444466667777",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Auteur : X",
          "Éditeur : Y",
          "Pages : 250",
          "Langue : Français",
          "Format : Relié",
        ],
        variants: [
          { id: "444466668888", image: livreBatuque, alt: "Vue 1" },
          { id: "444466669999", image: livreBatuqueBack, alt: "Vue arrière" },
          { id: "444466667888", image: livreBatuqueOpen, alt: "Vue ouverte" },
        ],
        images: [
          { image: livreBatuque, alt: "Livre Batuque vue complète" },
          { image: livreBatuqueBack, alt: "Livre Batuque vue arrière" },
          { image: livreBatuqueOpen, alt: "Livre Batuque vue ouverte" },
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
        variants: [
          { id: "555577779999", image: livretexpressao, alt: "Vue 1" },
        ],
        images: [{ image: livretexpressao, alt: "Livre Expressao vue" }],
      },
    ],
  },
  {
    subCategory: "entrainement",
    products: [
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
    ],
  },
];
