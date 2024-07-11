import React from "react";

function BestSellerComponent({ isBestSeller }) {
  return (
    isBestSeller && (
      <span className="w-fit h-fit py-0.5 px-2 text-xs md:text-sm rounded bg-color-gold uppercase">
        meilleur vente
      </span>
    )
  );
}

export default BestSellerComponent;
