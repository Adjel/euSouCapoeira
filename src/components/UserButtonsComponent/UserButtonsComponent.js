import React from "react";
import { SlHeart } from "react-icons/sl";
import styles from "./userButtonsComponent.module.css";
import LanguageButton from "../LanguageButton";
import UserButton from "../UserButton/UserButton";
import BasketButton from "../BasketButton";

function UserButtonsComponent() {
  return (
    <div className="relative flex h-7 items-center justify-between">
      <LanguageButton />
      <UserButton />
      <SlHeart className={styles.userNavItem} />
      <BasketButton />
    </div>
  );
}

export default UserButtonsComponent;
