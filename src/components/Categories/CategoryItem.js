import React from "react";
import Image from "next/image";
import Link from "next/link";
import { normalizeString } from "@/lib/utils";

function CategoryItem({
  title,
  image,
  alt,
  isVertical = false,
  preLink,
  className,
  isLink = true,
}) {
  const normalizedCategory = normalizeString(title);
  const getLink = () => {
    if (isLink) {
      if (normalizedCategory !== "")
        return `${preLink ? preLink : "/categories"}/${normalizedCategory}`;
      else {
        // throw error to crashlytics ?
        //throw new Error(`You need to pass a valid category`);
        return "";
      }
    }
  };

  return isLink ? (
    <Link
      href={getLink()}
      className={`flex ${
        isVertical && "md:flex-col gap-2"
      } items-center p-2 pr-3 hover:text-color-gold ${className}`}
    >
      <Image className="size-24 pr-4" src={image} alt={alt} />
      <h2 className="first-letter:uppercase">{title}</h2>
    </Link>
  ) : (
    <button
      className={`flex ${
        isVertical && "md:flex-col gap-2"
      } items-center p-2 pr-3 hover:text-color-gold ${className}`}
    >
      <Image className="size-24 pr-4" src={image} alt={alt} />
      <h2 className="first-letter:uppercase">{title}</h2>
    </button>
  );
}

export default CategoryItem;
