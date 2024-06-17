import React from "react";
import { SlHeart } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import styles from "./userButtonsComponent.module.css";
import LanguageButton from "../LanguageButton";
import UserButton from "../UserButton/UserButton";

function UserButtonsComponent() {
  return (
    <div className="relative flex items-center justify-between">
      <LanguageButton />
      <UserButton />
      <SlHeart className={styles.userNavItem} />
      <SlBasket className={styles.userNavItem} />
    </div>
  );
}

export default UserButtonsComponent;
