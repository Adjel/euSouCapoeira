import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryItem({ title, image, alt }) {
  const getLink = () => {
    if (title === "instruments") return "/instruments";
    if (title === "vêtements") return "/vetements";
    if (title === "entraînements") return "/entrainement";
    if (title === "livres") return "/livres";
    if (title === "ésotérisme") return "/esoterisme";
    else {
      throw new Error(`You need to pass a valid category`);
    }
  };

  return (
    <div className="flex items-center p-2 pr-3">
      <Image className="size-24 pr-4" src={image} alt={alt} />
      <Link href={getLink()}>
        <h2 className="first-letter:uppercase">{title}</h2>
      </Link>
    </div>
  );
}

export default CategoryItem;
