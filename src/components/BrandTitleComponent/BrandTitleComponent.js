import React from "react";
import icon from "../../../public/icon.svg";
import Image from "next/image";
import Link from "next/link";

function BrandTitleComponent() {
  return (
    <h1>
      <Link
        href="/"
        className="flex justify-center items-center uppercase cursor-pointer"
      >
        Eu sou
        <Image
          alt="une photo d'un berimbau représentant une lettre C"
          src={icon}
          className="-mr-2"
        />
        apoeira
      </Link>
    </h1>
  );
}

export default BrandTitleComponent;
