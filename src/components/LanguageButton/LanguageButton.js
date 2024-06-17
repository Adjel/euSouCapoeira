import React from "react";
import { GoCircle } from "react-icons/go";
import Image from "next/image";
import frenchFlag from "../../../public/frenchFlag.png";

function LanguageButton() {
  return (
    <div className="w-6 h-6 flex relative justify-center items-center">
      <GoCircle className="absolute w-6 h-6" />
      <div className="w-5 h-5 absolute flex items-center justify-center rounded-full overflow-hidden border-2 border-white">
        <Image
          src={frenchFlag}
          alt="le drapeau de la langue sélectionnée"
          fill
        />
      </div>
    </div>
  );
}

export default LanguageButton;
