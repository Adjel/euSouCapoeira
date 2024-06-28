import React from "react";
import style from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Tiktok from "../Tiktok";

function Footer() {
  return (
    <footer className="p-8 basicPadding grid gap-8 bg-extreme-dark-gray md:grid-cols-2 lg:grid-cols-3">
      <div className={`${style.gridItem} flex flex-col`}>
        <div className={style.item}>CGV / Infos légales</div>
        <div className={style.item}>Politiques de confidentialité</div>
        <div className={style.item}>Paramètres de confidentialité</div>
        <div className={style.item}>Droit de rétractation du consommateur</div>
        <div className={style.item}>Processus de commande</div>
        <div className={style.item}>Garantie légale de conformité</div>{" "}
        <div
          className={`${style.item} hidden h-fit border-2 border-purple-400 md:flex md:order-3 lg:hidden`}
        >
          ©️ EuSoCapoeira.fr - Tous droits réservés 2024
        </div>
      </div>
      <div className="flex border-2 border-red-500 flex-col h-full justify-center gap-8 md:order-2 lg:justify-start">
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
      <div className="hidden h-full justify-top gap-8 lg:flex flex-col lg:order-3 border-2 border-yellow-600">
        <div className={`${style.gridItem} hidden lg:flex`}>
          <FaFacebook color="white" className={style.icon} />
          <FaYoutube color="white" className={style.icon} />
          <FaInstagram color="white" className={style.icon} />
          <FaSquareXTwitter color="white" className={style.icon} />
          <Tiktok />
        </div>
        <div
          className={`${style.item} hidden h-fit border-2 border-emerald-200 lg:flex`}
        >
          ©️ EuSoCapoeira.fr - Tous droits réservés 2024
        </div>
      </div>
      <div
        className={`${style.item} flex h-fit border-2 border-purple-400 md:hidden`}
      >
        ©️ EuSoCapoeira.fr - Tous droits réservés 2024
      </div>
    </footer>
  );
}

export default Footer;
