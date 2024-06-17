"use client";
import React, { useState } from "react";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import nEBasket from "../../../public/nEBasket.svg";
import basket from "./public/basket.svg";
import Image from "next/image";

function BasketButton() {
  const [basket, setBasket] = useState([]);

  return (
    <>
      {basket.length > 0 ? (
        <>
          <Image src={nEBasket} className={styles.userNavItem} />
          <span className="absolute right-0.5 -top-1 w-3 h-1">3</span>
        </>
      ) : (
        <Image src={basket} className={styles.userNavItem} />
      )}
    </>
  );
}

export default BasketButton;
