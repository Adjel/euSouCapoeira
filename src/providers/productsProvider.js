import music from "../../public/fakeCatsImages/music.jpg";
import clothes from "../../public/fakeCatsImages/clothes.jpg";
import livreBatuque from "../../public/fakeApi/livreBatuque.jpg";
import livreBatuqueBack from "../../public/fakeApi/livreBatuqueBack.jpg";
import livreBatuqueOpen from "../../public/fakeApi/livreBatuqueOpen.jpg";
import livretexpressao from "../../public/fakeApi/livretexpressao.jpg";
import entrain from "../../public/fakeCatsImages/entrain.jpg";
import thsirtbrasilera from "../../public/fakeApi/vetements/tshirt/thsirtbrasilera.jpg";
import tshirtcapoeirabrasileira from "../../public/fakeApi/vetements/tshirt/tshirtcapoeirabrasileira.jpeg";
import tshirtcapoeirahommerealplay from "../../public/fakeApi/vetements/tshirt/tshirtcapoeirahommerealplay.jpg";
import tshirtcapoeirahommerealplay_Noir from "../../public/fakeApi/vetements/tshirt/tshirtcapoeirahommerealplay_Noir.jpg";
import tshirt_manequin_homme_capoeira_carybe from "../../public/fakeApi/vetements/tshirt/tshirt_manequin_homme_capoeira_carybe.jpg";
import tshirt_homme_capoeira_carybe from "../../public/fakeApi/vetements/tshirt/tshirt_homme_capoeira_carybe.jpg";
import tshirt_femme_capoeira_carybe from "../../public/fakeApi/vetements/tshirt/tshirt_femme_capoeira_carybe.jpeg";
import tshirt_fb_femme_capoeira_carybe from "../../public/fakeApi/vetements/tshirt/tshirt_fb_femme_capoeira_carybe.jpeg";
import debardeur_femme_capoeira_original_rose from "../../public/fakeApi/vetements/tshirt/debardeur_femme_capoeira_original_rose.jpeg";
import debardeur_femme_capoeira_logo_rose from "../../public/fakeApi/vetements/tshirt/debardeur_femme_capoeira_logo_rose.jpeg";
import debardeur_femme_capoeira_original_rose_face from "../../public/fakeApi/vetements/tshirt/debardeur_femme_capoeira_original_rose_face.jpeg";
import debardeur_femme_capoeira_original_rose_manequin from "../../public/fakeApi/vetements/tshirt/debardeur_femme_capoeira_original_rose_manequin.jpeg";
import debardeur_femme_capoeira_original_blanc from "../../public/fakeApi/vetements/tshirt/debardeur_femme_capoeira_original_blanc.jpeg";
import abada_blanc_coupe_tapered_carrot_unisexe from "../../public/fakeApi/vetements/pantalon/abada_blanc_coupe_tapered_carrot_unisexe.jpeg";
import abada_blanc_coupe_tapered_carrot_unisexe_side from "../../public/fakeApi/vetements/pantalon/abada_blanc_coupe_tapered_carrot_unisexe_side.jpeg";
import abada_blanc_coupe_tapered_carrot_unisexe_back from "../../public/fakeApi/vetements/pantalon/abada_blanc_coupe_tapered_carrot_unisexe_back.jpeg";
import abada_blanc_capoeira_shop_ue from "../../public/fakeApi/vetements/pantalon/abada_blanc_capoeira_shop_ue.jpeg";
import abada_blanc_capoeira_shop_ue_back from "../../public/fakeApi/vetements/pantalon/abada_blanc_capoeira_shop_ue_back.jpeg";
import pantalon_noir_capoeira_angola from "../../public/fakeApi/vetements/pantalon/pantalon_noir_capoeira_angola.jpeg";
import pantalon_noir_capoeira_angola_back from "../../public/fakeApi/vetements/pantalon/pantalon_noir_capoeira_angola_back.jpeg";
import pantalon_noir_capoeira_angola_zoomed from "../../public/fakeApi/vetements/pantalon/pantalon_noir_capoeira_angola_zoomed.jpeg";
import abada_capoeira_blanc_jamaica_side from "../../public/fakeApi/vetements/pantalon/abada_capoeira_blanc_jamaica_side.jpeg";
import abada_capoeira_blanc_jamaica from "../../public/fakeApi/vetements/pantalon/abada_capoeira_blanc_jamaica.jpeg";
import pantalon_capoeira_noir_jamaique_back from "../../public/fakeApi/vetements/pantalon/pantalon_capoeira_noir_jamaique_back.jpeg";
import pantalon_capoeira_noir_jamaique_face from "../../public/fakeApi/vetements/pantalon/pantalon_capoeira_noir_jamaique_face.jpeg";
import pantalon_capoeira_noir_jamaique_side from "../../public/fakeApi/vetements/pantalon/pantalon_capoeira_noir_jamaique_side.jpeg";
import pantalon_jogging_capoeira_homme_gris_back from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_gris_back.jpeg";
import pantalon_jogging_capoeira_homme_gris_side from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_gris_side.jpeg";
import pantalon_jogging_capoeira_homme_gris from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_gris.jpeg";
import pantalon_jogging_capoeira_homme_noir_back from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_noir_back.jpeg";
import pantalon_jogging_capoeira_homme_noir_side from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_noir_side.jpeg";
import pantalon_jogging_capoeira_homme_noir from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_noir.jpeg";
import pantalon_jogging_capoeira_homme_pocket_back from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_pocket_back.jpeg";
import pantalon_jogging_capoeira_homme_pocket from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme_pocket.jpeg";
import pantalon_jogging_capoeira_homme from "../../public/fakeApi/vetements/pantalon/pantalon_jogging_capoeira_homme.jpeg";
import { defaultProductEvals } from "./productEvaluationProvider";

export const getMockProducts = async () => {
  // Get mocked user evals
  const mockedApiEvals =
    JSON.parse(localStorage.getItem("productsEvals")) || [];

  // create a table with all mocked defaults evals and users mocked evals
  const allProductsEval = defaultProductEvals.map((pEval) => ({
    productId: pEval.productId,
    rates: [
      ...pEval.rates,
      ...(mockedApiEvals.find(
        (mockEval) => mockEval.productId === pEval.productId
      )?.rates ?? []),
    ],
    comments: [
      ...pEval.comments,
      ...(mockedApiEvals.find(
        (mockEval) => mockEval.productId === pEval.productId
      )?.comments ?? []),
    ],
  }));

  // add evals to product which have
  const productsWithEvals = products.map((subCategory) => ({
    subCategory: subCategory.subCategory,
    products: [
      ...subCategory.products.map((product) => ({
        ...product,
        comments:
          allProductsEval.find((pEval) => pEval.productId === product.id)
            ?.comments ?? [],
        rates:
          allProductsEval.find((pEval) => pEval.productId === product.id)
            ?.rates ?? [],
      })),
    ],
  }));

  return productsWithEvals;
};

export const products = [
  {
    subCategory: "berimbau gunga",
    products: [
      {
        name: "Berimbau Gunga en Bambou Traditionnel",
        price: 65.0,
        availability: "now",
        id: "001",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bambou",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Fait main",
        ],
        variants: [{ id: "001a", image: music, alt: "Vue 1" }],
        images: [{ image: music, alt: "Berimbau Gunga en Bambou vue 1" }],
      },
      {
        name: "Berimbau Gunga Professionnel en Acajou",
        price: 85.0,
        availability: "now",
        id: "002",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Acajou",
          "Inclus : Corde et baqueta",
          "Dimensions : Large",
          "Poids : Modéré",
          "Fabriqué au Brésil",
        ],
        variants: [{ id: "002a", image: music, alt: "Vue 1" }],
        images: [{ image: music, alt: "Berimbau Gunga en Acajou vue 1" }],
      },
      {
        name: "Berimbau Gunga - Caxixi Inclus",
        price: 70.0,
        availability: "now",
        id: "003",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Matériau : Bois tropical",
          "Inclus : Caxixi, corde et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Artisanat brésilien",
        ],
        variants: [{ id: "003a", image: music, alt: "Vue 1" }],
        images: [{ image: music, alt: "Berimbau Gunga avec Caxixi vue 1" }],
      },
      {
        name: "Berimbau Gunga Peint à la Main",
        price: 75.0,
        availability: "now",
        id: "004",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Matériau : Bois",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Modéré",
          "Peinture artisanale",
        ],
        variants: [{ id: "004a", image: music, alt: "Vue 1" }],
        images: [{ image: music, alt: "Berimbau Gunga peint à la main vue 1" }],
      },
      {
        name: "Berimbau Gunga avec Arame en Acier",
        price: 78.0,
        availability: "now",
        id: "005",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bois et acier",
          "Inclus : Corde en acier et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Fabriqué au Brésil",
        ],
        variants: [{ id: "005a", image: music, alt: "Vue 1" }],
        images: [
          { image: music, alt: "Berimbau Gunga avec arame en acier vue 1" },
        ],
      },
      {
        name: "Berimbau Gunga Artisanat Brésilien",
        price: 80.0,
        availability: "now",
        id: "006",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Matériau : Bois tropical",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Modéré",
          "Fait main au Brésil",
        ],
        variants: [{ id: "006a", image: music, alt: "Vue 1" }],
        images: [
          { image: music, alt: "Berimbau Gunga artisanat brésilien vue 1" },
        ],
      },
      {
        name: "Berimbau Gunga en Bois de Jacaranda",
        price: 85.0,
        availability: "now",
        id: "007",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bois de Jacaranda",
          "Inclus : Corde et baqueta",
          "Dimensions : Large",
          "Poids : Modéré",
          "Fait main",
        ],
        variants: [{ id: "007a", image: music, alt: "Vue 1" }],
        images: [
          { image: music, alt: "Berimbau Gunga en bois de Jacaranda vue 1" },
        ],
      },
      {
        name: "Berimbau Gunga Modèle Équilibré",
        price: 79.0,
        availability: "now",
        id: "008",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Matériau : Bois",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Fabriqué au Brésil",
        ],
        variants: [{ id: "008a", image: music, alt: "Vue 1" }],
        images: [
          { image: music, alt: "Berimbau Gunga modèle équilibré vue 1" },
        ],
      },
      {
        name: "Berimbau Gunga avec Verga Renforcé",
        price: 82.0,
        availability: "now",
        id: "009",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bois renforcé",
          "Inclus : Corde et baqueta",
          "Dimensions : Standard",
          "Poids : Léger",
          "Verga renforcé pour durabilité",
        ],
        variants: [{ id: "009a", image: music, alt: "Vue 1" }],
        images: [
          { image: music, alt: "Berimbau Gunga avec verga renforcé vue 1" },
        ],
      },
      {
        name: "Berimbau Gunga Édition Spéciale",
        price: 90.0,
        availability: "command",
        id: "010",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Matériau : Bois de qualité",
          "Inclus : Corde et baqueta",
          "Dimensions : Large",
          "Poids : Modéré",
          "Fabriqué au Brésil",
        ],
        variants: [{ id: "010a", image: music, alt: "Vue 1" }],
        images: [
          { image: music, alt: "Berimbau Gunga édition spéciale vue 1" },
        ],
      },
    ],
  },

  // Instruments - Berimbau Medio
  {
    subCategory: "berimbau medio",
    products: [
      // Liste des produits pour "berimbau medio" à ajouter ici avec le même format
    ],
  },

  // Instruments - Berimbau Viola
  {
    subCategory: "berimbau viola",
    products: [
      // Liste des produits pour "berimbau viola" à ajouter ici avec le même format
    ],
  },

  // Instruments - Atabaque
  {
    subCategory: "atabaque",
    products: [
      // Liste des produits pour "atabaque" à ajouter ici avec le même format
    ],
  },

  // Instruments - Pandeiro
  {
    subCategory: "pandeiro",
    products: [
      // Liste des produits pour "pandeiro" à ajouter ici avec le même format
    ],
  },

  // Instruments - Reco Reco
  {
    subCategory: "reco reco",
    products: [
      // Liste des produits pour "reco reco" à ajouter ici avec le même format
    ],
  },

  // Instruments - Agogo
  {
    subCategory: "agogo",
    products: [
      // Liste des produits pour "agogo" à ajouter ici avec le même format
    ],
  },

  // Vêtements - Chaussures
  {
    subCategory: "chaussures",
    products: [
      {
        name: "Chaussures de Capoeira - Semelle Souple",
        price: 45.0,
        availability: "now",
        id: "101",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Gear",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc souple",
          "Matériau supérieur : Cuir synthétique",
          "Interne : Textile respirant",
        ],
        sizes: [],
        variants: [{ id: "101a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures de Capoeira vue 1" }],
      },
      {
        name: "Chaussures de Capoeira - Édition Limitée",
        price: 55.0,
        availability: "now",
        id: "102",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Special",
          "Semelle intérieure : Amovible",
          "Semelle extérieure : Caoutchouc avec adhérence",
          "Matériau supérieur : Toile",
          "Interne : Textile doux",
        ],
        sizes: [],
        variants: [{ id: "102a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Édition Limitée vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Ultra-Légères",
        price: 60.0,
        availability: "now",
        id: "103",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira Shoes",
          "Semelle intérieure : Amovible",
          "Semelle extérieure : Caoutchouc flexible",
          "Matériau supérieur : Maille respirante",
          "Interne : Textile doux",
        ],
        sizes: [],
        variants: [{ id: "103a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures ultra-légères vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Design Moderne",
        price: 50.0,
        availability: "now",
        id: "104",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira Trend",
          "Semelle intérieure : Confortable",
          "Semelle extérieure : Caoutchouc antidérapant",
          "Matériau supérieur : Cuir véritable",
          "Interne : Textile respirant",
        ],
        sizes: [],
        variants: [{ id: "104a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Design Moderne vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Classic",
        price: 40.0,
        availability: "now",
        id: "105",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira Classic",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc durable",
          "Matériau supérieur : Toile",
          "Interne : Textile",
        ],
        sizes: [],
        variants: [{ id: "105a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Classic vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Casual",
        price: 48.0,
        availability: "now",
        id: "106",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Casual Capoeira",
          "Semelle intérieure : Confort",
          "Semelle extérieure : Caoutchouc flexible",
          "Matériau supérieur : Cuir synthétique",
          "Interne : Textile doux",
        ],
        sizes: [],
        variants: [{ id: "106a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Casual vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Performance",
        price: 65.0,
        availability: "now",
        id: "107",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Performance Capoeira",
          "Semelle intérieure : Amovible",
          "Semelle extérieure : Caoutchouc haute adhérence",
          "Matériau supérieur : Toile renforcée",
          "Interne : Textile respirant",
        ],
        sizes: [],
        variants: [{ id: "107a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Performance vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Tradition",
        price: 50.0,
        availability: "now",
        id: "108",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Tradition Capoeira",
          "Semelle intérieure : Confortable",
          "Semelle extérieure : Caoutchouc durable",
          "Matériau supérieur : Cuir véritable",
          "Interne : Textile",
        ],
        sizes: [],
        variants: [{ id: "108a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Tradition vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Sport",
        price: 55.0,
        availability: "now",
        id: "109",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Sport Capoeira",
          "Semelle intérieure : Textile",
          "Semelle extérieure : Caoutchouc anti-glisse",
          "Matériau supérieur : Maille respirante",
          "Interne : Textile",
        ],
        sizes: [],
        variants: [{ id: "109a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Sport vue 1" }],
      },
      {
        name: "Chaussures Capoeira - Urban",
        price: 60.0,
        availability: "now",
        id: "110",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Urban Capoeira",
          "Semelle intérieure : Amovible",
          "Semelle extérieure : Caoutchouc flexible",
          "Matériau supérieur : Cuir synthétique",
          "Interne : Textile respirant",
        ],
        variants: [{ id: "110a", image: clothes, alt: "Vue 1" }],
        images: [{ image: clothes, alt: "Chaussures Urban vue 1" }],
      },
    ],
  },

  // Vêtements - T-shirt
  {
    subCategory: "tshirt",
    products: [
      {
        name: "t-shirt capoeira homme realplay blanc",
        price: 25.0,
        availability: "now",
        id: "201",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Wear",
          "Matériau : 100% coton",
          "Couleur : Noir",
          "Tailles : S, M, L, XL",
          "Impression : Sérigraphie",
        ],
        sizes: [],
        variants: [
          {
            id: "201a",
            image: tshirtcapoeirahommerealplay_Noir,
            alt: "produit identique en noir",
          },
        ],
        images: [
          {
            image: tshirtcapoeirahommerealplay,
            alt: "tshirt capoeira homme realplay blanc",
          },
        ],
      },
      {
        name: "t-shirt capoeira homme realplay noir",
        price: 30.0,
        availability: "now",
        id: "201a",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Wear",
          "Matériau : 100% coton",
          "Couleur : Blanc",
          "Tailles : M, L, XL, XXL",
          "Impression : Design moderne",
        ],
        sizes: [],
        variants: [
          {
            id: "201",
            image: tshirtcapoeirahommerealplay,
            alt: "produit identique en blanc",
          },
        ],
        images: [
          {
            image: tshirtcapoeirahommerealplay_Noir,
            alt: "tshirt capoeira homme realplay noir",
          },
        ],
      },
      {
        name: "TSHIRT HOMME CAPOEIRA - CARYBÉ BLEU",
        price: 35.0,
        availability: "now",
        id: "203a",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira Limited",
          "Matériau : 100% coton bio",
          "Couleur : Gris clair",
          "Tailles : S, M, L",
          "Impression : Édition spéciale",
        ],
        sizes: [],
        variants: [
          {
            id: "203b",
            image: tshirt_homme_capoeira_carybe,
            alt: "photo du t shirt d'une autre couleur",
          },
        ],
        images: [
          {
            image: tshirt_manequin_homme_capoeira_carybe,
            alt: "Photo du t shirt sur un manequin",
          },
        ],
      },
      {
        name: "TSHIRT HOMME CAPOEIRA - CARYBÉ GRIS",
        price: 35.0,
        availability: "now",
        id: "203b",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira Limited",
          "Matériau : 100% coton bio",
          "Couleur : Gris clair",
          "Tailles : S, M, L",
          "Impression : Édition spéciale",
        ],
        sizes: [],
        variants: [
          {
            id: "203a",
            image: tshirt_manequin_homme_capoeira_carybe,
            alt: "photo du t shirt d'une autre couleur",
          },
        ],
        images: [
          {
            image: tshirt_homme_capoeira_carybe,
            alt: "Photo du t shirt sur fond blanc",
          },
          {
            image: tshirt_manequin_homme_capoeira_carybe,
            alt: "Photo du t shirt sur un manequin",
          },
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
        name: "TSHIRT FEMME CAPOEIRA - CARYBÉ ROUGE",
        price: 28.0,
        availability: "now",
        id: "204b",
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
            id: "204a",
            image: tshirt_femme_capoeira_carybe,
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
        name: "DÉBARDEUR FEMME CAPOEIRA ORIGINAL ROSE",
        price: 27.0,
        availability: "now",
        id: "205a",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Vintage",
          "Matériau : 100% coton",
          "Couleur : Bleu marine",
          "Tailles : M, L, XL",
          "Impression : Style vintage",
        ],
        sizes: [],
        variants: [
          {
            id: "205b",
            image: debardeur_femme_capoeira_original_blanc,
            alt: "Vue 1",
          },
        ],
        images: [
          {
            image: debardeur_femme_capoeira_original_rose_manequin,
            alt: "Une photo d'un débardeur rose de face pour femme porté par une manequin",
          },
          {
            image: debardeur_femme_capoeira_logo_rose,
            alt: "Une photo du logo d'un débardeur pour femme rose",
          },
          {
            image: debardeur_femme_capoeira_original_rose_face,
            alt: "Une photo d'un débardeur rose de face pour femme",
          },
          {
            image: debardeur_femme_capoeira_original_rose,
            alt: "Une photo d'un débardeur rose pour femme",
          },
        ],
      },
      {
        name: "DÉBARDEUR FEMME CAPOEIRA ORIGINAL BLANC",
        price: 30.0,
        availability: "now",
        id: "205b",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira Sport",
          "Matériau : Polyester",
          "Couleur : Vert",
          "Tailles : S, M, L, XL",
          "Impression : Design sportif",
        ],
        sizes: [],
        variants: [
          {
            id: "205a",
            image: debardeur_femme_capoeira_original_rose_face,
            alt: "Photo d'une variante rose de ce produit",
          },
        ],
        images: [
          {
            image: debardeur_femme_capoeira_original_blanc,
            alt: "Photo d'un débardeur pour femme rose",
          },
          {
            image: debardeur_femme_capoeira_original_blanc,
            alt: "Une photo d'un débardeur pour femme rose",
          },
        ],
      },
      {
        name: "T-shirt Capoeira - Brasileira - Homme",
        price: 24.0,
        availability: "now",
        id: "210",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Joy",
          "Matériau : 100% coton",
          "Couleur : Jaune",
          "Tailles : S, M, L",
          "Impression : Brasileira",
        ],
        sizes: [],
        variants: [],
        images: [
          {
            image: thsirtbrasilera,
            alt: "T-shirt Capoeira - Brasileira sur manequin",
          },
          {
            image: tshirtcapoeirabrasileira,
            alt: "T-shirt Capoeira - Brasileira sur fond blanc",
          },
        ],
      },
    ],
  },

  // Vêtements - Pantalon
  {
    subCategory: "pantalon",
    products: [
      {
        name: "ABADA BLANC - COUPE UNISEXE",
        price: 45.0,
        availability: "now",
        id: "301s",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Pants",
          "Matériau : 100% coton",
          "Couleur : Blanc",
          "Tailles : S, M, L, XL",
          "Ceinture : Élastique",
        ],
        sizes: [],
        variants: [],
        images: [
          {
            image: abada_blanc_coupe_tapered_carrot_unisexe,
            alt: "Photo d'un abada blanc unisexe vu de face",
          },
          {
            image: abada_blanc_coupe_tapered_carrot_unisexe_side,
            alt: "Photo d'un abada blanc unisexe vu de côté",
          },
          {
            image: abada_blanc_coupe_tapered_carrot_unisexe_back,
            alt: "Photo d'un abada blanc unisexe vu de derrière",
          },
        ],
      },
      {
        name: "PANTALON NOIR CAPOEIRA (ANGOLA)",
        price: 55.0,
        availability: "now",
        id: "303",
        date: new Date().toISOString(),
        isBestSeller: false,
        specs: [
          "Marque : Capoeira ANGOLA",
          "Matériau : Polyester",
          "Couleur : Noir",
          "Tailles : S, M, L, XL",
          "Ceinture : Élastique renforcée",
        ],
        sizes: [],
        variants: [],
        images: [
          { image: pantalon_noir_capoeira_angola, alt: "abada angola noir" },
          {
            image: pantalon_noir_capoeira_angola_back,
            alt: "abada angola noir de derriere",
          },
          {
            image: pantalon_noir_capoeira_angola_zoomed,
            alt: "abada angola noir zommé",
          },
        ],
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
        name: "ABADA DE CAPOEIRA NOIR - JAMAICA",
        price: 47.94,
        availability: "now",
        id: "304b",
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
            id: "304a",
            image: abada_capoeira_blanc_jamaica,
            alt: "un abada blanc de style jamaica",
          },
        ],
        images: [
          {
            image: pantalon_capoeira_noir_jamaique_back,
            alt: "Abada noir jamaica de derriere",
          },
          {
            image: pantalon_capoeira_noir_jamaique_side,
            alt: "Abada noir jamaica de coté",
          },
          {
            image: pantalon_capoeira_noir_jamaique_face,
            alt: "Abada noir jamaica de face",
          },
        ],
      },
      {
        name: "ABADA BLANC CAPOEIRA SHOP UE",
        price: 49.14,
        availability: "now",
        id: "305",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Sport",
          "Matériau : Polyester stretch",
          "Couleur : Bleu",
          "Tailles : S, M, L, XL",
          "Ceinture : Élastique avec cordon ajustable",
        ],
        variants: [],
        images: [
          {
            image: abada_blanc_capoeira_shop_ue,
            alt: "Pantalon Sportif vue 1",
          },
        ],
      },
      {
        name: "PANTALON JOGGING CAPOEIRA - UNISEXE NOIR",
        price: 42.53,
        availability: "now",
        id: "306a",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Urban",
          "Matériau : Mélange coton-polyester",
          "Couleur : Noir",
          "Tailles : S, M, L, XL, XXL",
          "Ceinture : Élastique avec cordon",
        ],
        variants: [
          {
            id: "306b",
            image: pantalon_jogging_capoeira_homme_gris,
            alt: "le même pantalon d'une en gris",
          },
        ],
        images: [
          {
            image: pantalon_jogging_capoeira_homme_noir_back,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_noir_side,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_noir,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_pocket_back,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_pocket,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme,
            alt: "un jogging de capoeira",
          },
        ],
      },
      {
        name: "PANTALON JOGGING CAPOEIRA - UNISEXE GRIS",
        price: 42.53,
        availability: "now",
        id: "306b",
        date: new Date().toISOString(),
        isBestSeller: true,
        specs: [
          "Marque : Capoeira Urban",
          "Matériau : Mélange coton-polyester",
          "Couleur : Noir",
          "Tailles : S, M, L, XL, XXL",
          "Ceinture : Élastique avec cordon",
        ],
        variants: [
          {
            id: "306a",
            image: pantalon_jogging_capoeira_homme_noir,
            alt: "le même pantalon d'une en noir",
          },
        ],
        images: [
          {
            image: pantalon_jogging_capoeira_homme_gris_back,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_gris_side,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_noir,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_pocket_back,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_pocket,
            alt: "un jogging de capoeira",
          },
          {
            image: pantalon_jogging_capoeira_homme_gris,
            alt: "un jogging de capoeira",
          },
        ],
      },
    ],
  },
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
