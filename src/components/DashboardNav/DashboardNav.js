import React from "react";
import Link from "next/link";
import { useLoginModalStore, useUserStore } from "@/stores/useUserStore";

function DashboardNav({ isModal = true }) {
  const { clearUser } = useUserStore();

  const liStyle = "cursor-pointer hover:text-color-gold";
  const linkStyle = `w-fit ${
    isModal ? "text-xl" : "text-lg"
  } font-bold m-0 p-0`;
  const textStyle = "first-letter:uppercase";

  const LinkComponent = ({ title, link }) => {
    return (
      <Link href={`/dashboard/${link}`} className={`${linkStyle}`}>
        <div className={textStyle}>{title}</div>
      </Link>
    );
  };

  return (
    <ul
      className={`flex flex-col h-full justify-center ${
        isModal ? "gap-16" : "gap-4"
      }`}
    >
      <li className={liStyle}>
        <LinkComponent link={"mes_informations"} title={"mes informations"} />
      </li>
      <li className={liStyle}>
        <LinkComponent link={"mes_commandes"} title={"mes commandes"} />
      </li>
      <li className={liStyle}>
        <LinkComponent link={"mes_adresses"} title={"mes adresses"} />
      </li>
      <li className={liStyle}>
        <LinkComponent link={"retour"} title={"retourner un produit"} />
      </li>
      <li className={liStyle}>
        <button className={`${linkStyle}`} onClick={clearUser}>
          <div className={textStyle}>me déconnecter</div>
        </button>
      </li>
    </ul>
  );
}

export default DashboardNav;
