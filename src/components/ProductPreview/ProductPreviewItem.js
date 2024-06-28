import React from "react";
import Image from "next/image";
import RatingComponent from "../RatingComponent";

function ProductPreviewItem({ productName, image, alt, price, rate, rateNbr }) {
  return (
    <div className="w-fit h-auto flex flex-col justify-center">
      <Image
        className="w-fit h-auto pr-4 border-2 border-color-text-medium-gray"
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
