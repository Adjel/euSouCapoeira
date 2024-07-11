import React from "react";
import Image from "next/image";
import Link from "next/link";
import { normalizeString } from "@/lib/utils";

function CategoryItem({ title, image, alt, isVertical = false, preLink }) {
  const normalizedCategory = normalizeString(title);
  const getLink = () => {
    if (normalizedCategory !== "")
      return `${preLink ? preLink : ""}/${normalizedCategory}`;
    else {
      throw new Error(`You need to pass a valid category`);
    }
  };

  return (
    <Link
      href={getLink()}
      className={`flex ${
        isVertical && "md:flex-col gap-2"
      } items-center p-2 pr-3 hover:text-color-gold`}
    >
      <Image className="size-24 pr-4" src={image} alt={alt} />
      <h2 className="first-letter:uppercase">{title}</h2>
    </Link>
  );
}

export default CategoryItem;
