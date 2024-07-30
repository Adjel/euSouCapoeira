"use client";
import React from "react";
import { SlHeart } from "react-icons/sl";
import styles from "./userButtonsComponent.module.css";
import LanguageButton from "../LanguageButton";
import UserButton from "../UserButton/UserButton";
import CartButton from "../CartButton";

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
        <CartButton />
      </li>
    </ul>
  );
}

export default UserButtonsComponent;
