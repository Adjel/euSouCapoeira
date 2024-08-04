import React from "react";
import style from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Tiktok from "../Tiktok";

function Footer() {
  return (
    <footer className="p-8 basicPadding grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-extreme-dark-gray grid-areas">
      <ul className={`${style.col}`}>
        <div className={`${style.gridItem} flex flex-col`}>
          <li className={style.item}>
            <span>CGV / Infos légales</span>
          </li>
          <li className={style.item}>
            <span>Politiques de confidentialité</span>
          </li>
          <li className={style.item}>
            <span>Paramètres de confidentialité</span>
          </li>
          <li className={style.item}>
            <span>Droit de rétractation du consommateur</span>
          </li>
          <li className={style.item}>
            <span>Processus de commande</span>
          </li>
          <li className={style.item}>
            <span>Garantie légale de conformité</span>
          </li>
        </div>
        <li className={`${style.item} hidden md:flex lg:hidden h-fit `}>
          <span>©️ EuSoCapoeira.fr - Tous droits réservés 2024</span>
        </li>
      </ul>
      <ul className={`${style.col}`}>
        <ul className={`${style.gridItem} flex lg:hidden`}>
          <li>
            <FaSquareXTwitter color="white" className={style.icon} />
          </li>
          <li>
            <FaYoutube color="white" className={style.icon} />
          </li>
          <li>
            <FaInstagram color="white" className={style.icon} />
          </li>
          <li>
            <FaFacebook color="white" className={style.icon} />
          </li>
          <li>
            <Tiktok />
          </li>
        </ul>
        <ul className={`${style.gridItem} flex flex-col`}>
          <li className={style.item}>
            <span>à propos</span>
          </li>
          <li className={style.item}>
            <span>Partenaires</span>
          </li>
          <li className={style.item}>
            {" "}
            <span>Guide des tailles</span>
          </li>
          <li className={style.item}>
            <span>Livraison et retour</span>
          </li>
        </ul>
      </ul>
      <ul className="flex flex-col gap-16">
        <li>
          <ul className={`${style.gridItem} hidden lg:flex`}>
            <li>
              <FaFacebook color="white" className={style.icon} />
            </li>
            <li>
              <FaYoutube color="white" className={style.icon} />
            </li>
            <li>
              <FaInstagram color="white" className={style.icon} />
            </li>
            <li>
              <FaSquareXTwitter color="white" className={style.icon} />
            </li>
            <li>
              <Tiktok />
            </li>
          </ul>
        </li>
        <li
          className={`${style.item} flex md:hidden md:order-3 lg:flex lg:order-4 h-fit`}
        >
          ©️ EuSoCapoeira.fr - Tous droits réservés 2024
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
