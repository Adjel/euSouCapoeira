import React from "react";

function PriceComponent({ price }) {
  // Convertir le prix en une chaîne de caractères avec une virgule comme séparateur décimal
  const formattedPrice = price.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return <span className="font-bold text-xl">{formattedPrice} €</span>;
}

export default PriceComponent;
