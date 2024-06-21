import React from "react";
import Image from "next/image";

function CategoryItem({ title, image, alt }) {
  return (
    <div className="flex items-center p-2 pr-3">
      <Image className="size-16 pr-4" src={image} alt={alt} />
      <h2 className="first-letter:uppercase">{title}</h2>
    </div>
  );
}

export default CategoryItem;
