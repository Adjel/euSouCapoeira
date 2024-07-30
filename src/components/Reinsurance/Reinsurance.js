import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaCcStripe } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import style from "./reinsurance.module.css";

function Reinsurance() {
  // ul and il for each ?
  return (
    <section className="p-8 flex flex-col mt-6 md:flex-row gap-6 md:justify-evenly bg-background-medium-gray">
      <div className={style.item}>
        <FaTruckFast className={style.icon} />
        <span className={style.desc}>livraison rapide</span>
      </div>
      <div className={style.item}>
        <FaCcStripe className={style.icon} />
        <span className={style.desc}>satisfaction client</span>
      </div>
      <div className={style.item}>
        <MdSupportAgent className={style.icon} />
        <span className={style.desc}>paiement sécurisé</span>
      </div>
      <div className={style.item}>
        <FaRegHandshake className={style.icon} />
        <span className={style.desc}>support humain</span>
      </div>
    </section>
  );
}

export default Reinsurance;
