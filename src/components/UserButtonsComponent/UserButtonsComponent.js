import React from "react";

import { RxAvatar } from "react-icons/rx";
import { SlHeart } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import styles from "./userButtonsComponent.module.css";
import LanguageButton from "../LanguageButton";

function UserButtonsComponent() {
  return (
    <div className="relative flex items-center justify-between">
      <LanguageButton />
      <RxAvatar className={styles.userNavItem} />
      <SlHeart className={styles.userNavItem} />
      <SlBasket className={styles.userNavItem} />
    </div>
  );
}

export default UserButtonsComponent;
