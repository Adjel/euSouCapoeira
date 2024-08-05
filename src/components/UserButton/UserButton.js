"use client";
import React from "react";
import userIcon from "../../../public/userIcon.svg";
import connectedUserIcon from "../../../public/coUserIcon.svg";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import Image from "next/image";
import { useLoginModalStore } from "@/stores/useUserStore";
import useUserMounted from "@/lib/useUserMounted";

function UserButton() {
  const { toggle } = useLoginModalStore();
  const isLogged = useUserMounted();

  return (
    <div onClick={toggle} className="w-fit cursor-pointer">
      {isLogged ? (
        <Image
          className={styles.userNavItem}
          alt="l'icône de l'utilisateur connecté"
          src={connectedUserIcon}
        />
      ) : (
        <Image
          className={styles.userNavItem}
          alt="l'icône de l'utilisateur non connecté"
          src={userIcon}
        />
      )}
    </div>
  );
}

export default UserButton;
