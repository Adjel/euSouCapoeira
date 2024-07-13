"use client";
import React from "react";
import { SlHeart } from "react-icons/sl";
import styles from "./userButtonsComponent.module.css";
import LanguageButton from "../LanguageButton";
import UserButton from "../UserButton/UserButton";
import AddToBasketButton from "../AddToBasketButton";

function UserButtonsComponent() {
  return (
    <ul className="relative flex h-7 items-center justify-between">
      <li>
        <LanguageButton />
      </li>
      <li>
        <UserButton />
      </li>
      <li>
        <SlHeart className={styles.userNavItem} />
      </li>
      <li>
        <AddToBasketButton />
      </li>
    </ul>
  );
}

export default UserButtonsComponent;
