import React from "react";
import Image from "next/image";
import RatingComponent from "../RatingComponent";

function ProductPreviewItem({ productName, image, alt, price, rate, rateNbr }) {
  return (
    <div className="flex-col items-center p-2 pr-3">
      <Image className="size-16 pr-4" src={image} alt={alt} />
      <RatingComponent rate={rate} rateNbr={rateNbr} />
      <div className="first-letter:uppercase text-sm">{productName}</div>
      <div className="font-bold">{price} €</div>
    </div>
  );
}

export default ProductPreviewItem;
