"use client";
import React from "react";
import userIcon from "../../../public/userIcon.svg";
import connectedUserIcon from "../../../public/coUserIcon.svg";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import Image from "next/image";
import { useLoginModalStore, useUserStore } from "@/stores/useUserStore";

function UserButton() {
  const { isOpen, setIsOpen } = useLoginModalStore();
  const { user, setUser } = useUserStore();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      onClick={handleClick}
      className="w-fit cursor-pointer border-2 border-red-600"
    >
      {user ? (
        <Image className={styles.userNavItem} src={connectedUserIcon} />
      ) : (
        <Image className={styles.userNavItem} src={userIcon} />
      )}
    </div>
  );
}

export default UserButton;
