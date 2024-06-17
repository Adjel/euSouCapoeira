import React from "react";
import userIcon from "../../../public/userIcon.svg";
import connectedUserIcon from "../../../public/coUserIcon.svg";
import styles from "../UserButtonsComponent/userButtonsComponent.module.css";
import Image from "next/image";

function UserButton() {
  return (
    <div>
      <Image className={styles.userNavItem} src={connectedUserIcon} />
    </div>
  );
}

export default UserButton;
