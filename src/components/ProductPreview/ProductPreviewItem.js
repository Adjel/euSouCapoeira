import React from "react";
import Image from "next/image";
import RatingComponent from "../RatingComponent";

function ProductPreviewItem({ productName, image, alt, price, rate, rateNbr }) {
  return (
    <div className="w-auto h-auto flex flex-col justify-center">
      <Image
        className="w-64 h-64 pr-4 border-2 border-color-text-medium-gray overflow-hidden"
        src={image}
        alt={alt}
      />
      <RatingComponent rate={rate} rateNbr={rateNbr} />
      <div className="first-letter:uppercase text-sm">{productName}</div>
      <div className="w-fit font-bold">{price} €</div>
    </div>
  );
}

export default ProductPreviewItem;
