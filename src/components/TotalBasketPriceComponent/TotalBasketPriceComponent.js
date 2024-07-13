import useCartStore from "@/stores/useCartStore";
import React from "react";

function TotalBasketPriceComponent() {
  const { totalPrice } = useCartStore();

  return (
    <h2 className="first-letter:uppercase text-2xl font-bold">
      Montant total: {totalPrice} €
    </h2>
  );
}

export default TotalBasketPriceComponent;
