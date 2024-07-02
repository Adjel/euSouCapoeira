import React from "react";
import Link from "next/link";
import { useUserStore } from "@/stores/useUserStore";

function DashboardNav() {
  const { clearUser } = useUserStore();

  const linkStyle = "w-fit text-xl font-bold m-0 p-0";
  const liStyle = "cursor-pointer hover:text-color-gold";
  const textStyle = "first-letter:uppercase";

  return (
    <ul className="flex flex-col h-full justify-center gap-16">
      <li className={liStyle}>
        <Link href="/dashboard" className={`${linkStyle}`}>
          <div className="textStyle">Informations</div>
        </Link>
      </li>
      <li className={liStyle}>
        <Link href="/dashboard" className={`${linkStyle}`}>
          <div className={textStyle}>mes commandes</div>
        </Link>
      </li>
      <li className={liStyle}>
        <Link href="/dashboard" className={`${linkStyle}`}>
          <div className={textStyle}>Mes adresses</div>
        </Link>
      </li>
      <li className={liStyle}>
        <Link href="/dashboard" className={`${linkStyle}`}>
          <div className={textStyle}>retounrer un produit</div>
        </Link>
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
