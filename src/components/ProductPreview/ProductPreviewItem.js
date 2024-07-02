import React from "react";
import Image from "next/image";
import RatingComponent from "../RatingComponent";

function ProductPreviewItem({ productName, image, alt, price, rate, rateNbr }) {
  return (
    <div className="w-auto h-auto flex flex-col justify-center items-center">
      <div className="relative w-full h-auto max-h-64 border-2 border-color-text-medium-gray overflow-hidden">
        <Image src={image} alt={alt} objectFit="cover" />
      </div>
      <RatingComponent rate={rate} rateNbr={rateNbr} />
      <div className="first-letter:uppercase text-sm text-center">
        {productName}
      </div>
      <div className="w-fit font-bold text-center">{price} €</div>
    </div>
  );
}

export default ProductPreviewItem;
