import React from "react";
import Link from "next/link";

function DashboardNav() {
  const linkStyle = "w-fit text-xl font-bold m-0 p-0";
  const liStyle = "cursor-pointer hover:text-color-gold";
  const textStyle = "first-letter:uppercase";

  return (
    <ul className="flex flex-col h-full py-36 justify-between gap-2">
      <li className={liStyle}>
        <Link href="" className={`${linkStyle}`}>
          <div className="textStyle">Informations</div>
        </Link>
      </li>
      <li className={liStyle}>
        <Link href="" className={`${linkStyle}`}>
          <div className={textStyle}>mes commandes</div>
        </Link>
      </li>
      <li className={liStyle}>
        <Link href="" className={`${linkStyle}`}>
          <div className={textStyle}>Mes adresses</div>
        </Link>
      </li>
      <li className={liStyle}>
        <Link href="" className={`${linkStyle}`}>
          <div className={textStyle}>retounrer un produit</div>
        </Link>
      </li>
      <li className={liStyle}>
        <button
          className={`${linkStyle}`} //todo OnClick
        >
          <div className={textStyle}>me déconnecter</div>
        </button>
      </li>
    </ul>
  );
}

export default DashboardNav;
