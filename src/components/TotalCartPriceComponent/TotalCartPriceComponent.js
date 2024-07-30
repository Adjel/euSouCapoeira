import useCartStore from "@/stores/useCartStore";
import React from "react";

function TotalCartPriceComponent() {
  const { totalPrice } = useCartStore();

  return (
    <h2 className="first-letter:uppercase text-2xl font-bold">
      Montant total: {totalPrice.toFixed(2)} €
    </h2>
  );
}

export default TotalCartPriceComponent;
