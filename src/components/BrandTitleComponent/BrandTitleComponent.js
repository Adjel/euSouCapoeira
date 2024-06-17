import React from "react";
import icon from "../../../public/icon.svg";
import Image from "next/image";

function BrandTitleComponent() {
  return (
    <div className="flex justify-center items-center uppercase">
      Eu sou
      <Image
        alt="une photo d'un berimbau représentant une lettre C"
        src={icon}
        className="-mr-2"
      />
      apoeira
    </div>
  );
}

export default BrandTitleComponent;
