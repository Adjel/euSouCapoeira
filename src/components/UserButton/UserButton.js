"use client";
import React, { useState } from "react";
import userIcon from "../../../public/userIcon.svg";
import connectedUserIcon from "../../../public/coUserIcon.svg";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import Image from "next/image";
import { useLoginModalStore } from "@/stores/useUserStore";

function UserButton() {
  const { isOpen, setIsOpen } = useLoginModalStore();

  const [user, setUser] = useState();

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {user ? (
        <Image className={styles.userNavItem} src={connectedUserIcon} />
      ) : (
        <Image className={styles.userNavItem} src={userIcon} />
      )}
    </div>
  );
}

export default UserButton;
