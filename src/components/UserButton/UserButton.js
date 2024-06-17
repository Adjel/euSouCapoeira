"use client";
import React, { useState } from "react";
import userIcon from "../../../public/userIcon.svg";
import connectedUserIcon from "../../../public/coUserIcon.svg";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import Image from "next/image";

function UserButton() {
  const [user, setUser] = useState();

  return (
    <>
      {user ? (
        <Image className={styles.userNavItem} src={connectedUserIcon} />
      ) : (
        <Image className={styles.userNavItem} src={userIcon} />
      )}
    </>
  );
}

export default UserButton;
