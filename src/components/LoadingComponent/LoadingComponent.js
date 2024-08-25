import React from "react";
import icon from "../../../public/icon.svg";
import Image from "next/image";

function LoadingComponent({
  sentence = "Chargement en cours...",
  imagePriority = false,
}) {
  return (
    <section className="basicPadding py-7">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            priority={imagePriority}
            alt="une photo d'un berimbau représentant une lettre C"
            src={icon}
            className="animate-spin h-32 w-32 my-32 text-color-gold "
          />
          <span className="text-lg uppercase">{sentence}</span>
        </div>
      </div>
    </section>
  );
}

export default LoadingComponent;
