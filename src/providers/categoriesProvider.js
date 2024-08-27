import clothes from "../../public/fakeCatsImages/clothes.jpg";
import entrain from "../../public/fakeCatsImages/entrain.jpg";
import music from "../../public/fakeCatsImages/music.jpg";
import berimbau from "../../public/backgrounds/berimbau.png";
import corde_de_capoeira_adulte_brute_10_12mm from "../../public/fakeApi/vetements/cordes/corde_de_capoeira_adulte_brute_10_12mm.jpg";
import tshirtcapoeirabrasileira from "../../public/fakeApi/vetements/tshirt/tshirtcapoeirabrasileira.jpeg";
import abada_blanc_coupe_tapered_carrot_unisexe from "../../public/fakeApi/vetements/pantalon/abada_blanc_coupe_tapered_carrot_unisexe.jpeg";
import berimbau_valmir_das_biribas from "../../public/fakeApi/instruments/berimbaumedio/berimbau_valmir_das_biribas.jpg";
import berimbau_capoeira_regional_mestre_nenel_profissional from "../../public/fakeApi/instruments/berimbauviola/berimbau_capoeira_regional_mestre_nenel_profissional.jpg";
import atabaque_capoeira_shop_all from "../../public/fakeApi/instruments/atabaque/atabaque_capoeira_shop_all.jpeg";
import pandeiros_capoeira from "../../public/fakeApi/instruments/pandeiro/pandeiros_capoeira.jpg";
import reco_reco_bambou_bahia from "../../public/fakeApi/instruments/recoreco/reco_reco_bambou_bahia.jpg";
import agogo_pyrograve_lua_rasta from "../../public/fakeApi/instruments/agogo/agogo_pyrograve_lua_rasta.jpeg";
import livreBatuque from "../../public/fakeApi/livreBatuque.jpg";
import Fitas_Bracelets_Rubans_Bresiliens_Porte_Bonheur from "../../public/fakeApi/esoterisme/Fitas_Bracelets_Rubans_Bresiliens_Porte_Bonheur.webp";
import rubans_bracelets_colores from "../../public/fakeApi/esoterisme/rubans_bracelets_colores.jpeg";
import capoeira_dessin_de_henri_ibara from "../../public/fakeApi/livres/capoeira_dessin_de_henri_ibara.jpeg";

export const categories = [
  {
    image: clothes,
    alt: "catégorie vêtements",
    title: "vêtements",
    backgroundImage: berimbau,
    subCategories: [
      {
        name: "chaussures",
        image: clothes,
        alt: "une image représentant la catégorie chaussures",
        productNbr: 5,
      },

      {
        name: "cordes",
        image: corde_de_capoeira_adulte_brute_10_12mm,
        alt: "une image représentant la catégorie cordes de grades",
        productNbr: 3,
      },

      {
        name: "tshirt",
        image: tshirtcapoeirabrasileira,
        alt: "une image représentant la catégorie t-shirt",
        productNbr: 5,
      },

      {
        name: "pantalon",
        image: abada_blanc_coupe_tapered_carrot_unisexe,
        productNbr: 15,
      },
    ],
  },
  {
    image: entrain,
    alt: "catégorie entraînements",
    title: "entraînements",
    backgroundImage: berimbau,
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
    backgroundImage: berimbau,
    subCategories: [
      {
        name: "Berimbau Gunga",
        image: music,
        alt: "une image représentant la catégorie berimbau gunga",
        productNbr: 2,
      },
      {
        name: "Berimbau Medio",
        image: berimbau_valmir_das_biribas,
        alt: "une image représentant la catégorie berimbau medio",
        productNbr: 2,
      },
      {
        name: "berimbau viola",
        image: berimbau_capoeira_regional_mestre_nenel_profissional,
        alt: "une image représentant la catégorie berimbau viola",
        productNbr: 2,
      },
      {
        name: "Atabaque",
        image: atabaque_capoeira_shop_all,
        alt: "une image représentant la catégorie atabaque",
        productNbr: 6,
      },
      {
        name: "pandeiro",
        image: pandeiros_capoeira,
        alt: "une image représentant la catégorie pandeiro",
        productNbr: 4,
      },
      {
        name: "Reco reco",
        image: reco_reco_bambou_bahia,
        alt: "une image représentant la catégorie reco reco",
        productNbr: 2,
      },
      {
        name: "Agogo",
        image: agogo_pyrograve_lua_rasta,
        alt: "une image représentant la catégorie agogo",
        productNbr: 3,
      },
    ],
  },
  {
    image: livreBatuque,
    alt: "catégorie Livres",
    title: "livres",
    backgroundImage: capoeira_dessin_de_henri_ibara,
    subCategories: [],
  },
  {
    image: rubans_bracelets_colores,
    alt: "catégorie ésotérisme",
    title: "ésotérisme",
    backgroundImage: Fitas_Bracelets_Rubans_Bresiliens_Porte_Bonheur,
    subCategories: [],
  },
];
