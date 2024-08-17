import React from "react";
import Image from "next/image";
import RatingComponent from "../RatingComponent";
import Link from "next/link";

function ProductPreviewItem({ productName, image, alt, price, productId }) {
  return (
    <Link
      href={`/product/${productId}`}
      className="w-auto h-auto flex flex-col justify-center items-center"
    >
      <div className="relative w-full h-auto max-h-64 border-2 border-color-text-medium-gray overflow-hidden">
        <Image src={image} alt={alt} style={{ objectFit: "cover" }} />
      </div>
      <RatingComponent productId={productId} />
      <span className="first-letter:uppercase text-sm text-center">
        {productName}
      </span>
      <span className="w-fit font-bold text-center">{price} €</span>
    </Link>
  );
}

export default ProductPreviewItem;
