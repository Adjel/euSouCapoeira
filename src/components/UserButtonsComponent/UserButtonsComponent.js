"use client";
import React from "react";
import styles from "./userButtonsComponent.module.css";
import UserButton from "../UserButton/UserButton";
import CartButton from "../CartButton";
import WishListButton from "../WishListButton";

function UserButtonsComponent() {
  return (
    <ul className="relative flex h-7 items-center justify-between">
      <li>
        <UserButton />
      </li>
      <li>
        <WishListButton className={styles.userNavItem} />
      </li>
      <li>
        <CartButton />
      </li>
    </ul>
  );
}

export default UserButtonsComponent;
