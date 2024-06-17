import React from "react";
import { GoCircle } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { SlHeart } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import styles from "./userButtonsComponent.module.css";

function UserButtonsComponent() {
  return (
    <div className="flex items-center justify-between">
      <GoCircle className={`${styles.userNavItem} ml-0`} />
      <RxAvatar className={styles.userNavItem} />
      <SlHeart className={styles.userNavItem} />
      <SlBasket className={styles.userNavItem} />
    </div>
  );
}

export default UserButtonsComponent;
