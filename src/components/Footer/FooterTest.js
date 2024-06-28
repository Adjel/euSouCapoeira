import React from "react";
import style from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Tiktok from "../Tiktok";

function FooterTest() {
  return (
    <footer className="p-8 basicPadding grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-extreme-dark-gray grid-areas">
      <div className={`${style.col}`}>
        <div className={`${style.gridItem} flex flex-col`}>
          <div className={style.item}>CGV / Infos légales</div>
          <div className={style.item}>Politiques de confidentialité</div>
          <div className={style.item}>Paramètres de confidentialité</div>
          <div className={style.item}>
            Droit de rétractation du consommateur
          </div>
          <div className={style.item}>Processus de commande</div>
          <div className={style.item}>Garantie légale de conformité</div>
        </div>
        <div className={`${style.item} hidden md:flex lg:hidden h-fit `}>
          ©️ EuSoCapoeira.fr - Tous droits réservés 2024
        </div>
      </div>
      <div className={`${style.col}`}>
        <div className={`${style.gridItem} flex lg:hidden`}>
          <FaFacebook color="white" className={style.icon} />
          <FaYoutube color="white" className={style.icon} />
          <FaInstagram color="white" className={style.icon} />
          <FaSquareXTwitter color="white" className={style.icon} />
          <Tiktok />
        </div>
        <div className={`${style.gridItem} flex flex-col`}>
          <div className={style.item}>à propos</div>
          <div className={style.item}>Partenaires</div>
          <div className={style.item}>Guide des tailles</div>
          <div className={style.item}>Livraison et retour</div>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div className={`${style.gridItem} hidden lg:flex`}>
          <FaFacebook color="white" className={style.icon} />
          <FaYoutube color="white" className={style.icon} />
          <FaInstagram color="white" className={style.icon} />
          <FaSquareXTwitter color="white" className={style.icon} />
          <Tiktok />
        </div>
        <div
          className={`${style.item} flex md:hidden md:order-3 lg:flex lg:order-4 h-fit`}
        >
          ©️ EuSoCapoeira.fr - Tous droits réservés 2024
        </div>
      </div>
    </footer>
  );
}

export default FooterTest;
