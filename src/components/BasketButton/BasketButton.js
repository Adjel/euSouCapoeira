"use client";
import React, { useState } from "react";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import { SlBasket } from "react-icons/sl";
import nEBasket from "../../../public/nEBasket.svg";
import basket from "../../../public/basket.svg";

function BasketButton() {
  const [basket, setBasket] = useState([]);

  return (
    <>
      {basket.length === 0 ? (
        <>
          <nEBasket className={styles.userNavItem} />
          <span className="absolute right-0.5 -top-1 w-3 h-1">3</span>
        </>
      ) : (
        <SlBasket className={styles.userNavItem} />
      )}
    </>
  );
}

export default BasketButton;
