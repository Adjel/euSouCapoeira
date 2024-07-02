"use client";
import React from "react";
import userIcon from "../../../public/userIcon.svg";
import connectedUserIcon from "../../../public/coUserIcon.svg";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import Image from "next/image";
import { useLoginModalStore, useUserStore } from "@/stores/useUserStore";

function UserButton() {
  const { toggle } = useLoginModalStore();
  const { user } = useUserStore();

  return (
    <div onClick={toggle} className="w-fit cursor-pointer">
      {user ? (
        <Image className={styles.userNavItem} src={connectedUserIcon} />
      ) : (
        <Image className={styles.userNavItem} src={userIcon} />
      )}
    </div>
  );
}

export default UserButton;
