import React from "react";

function PriceComponent({ price, className }) {
  // Convertir le prix en une chaîne de caractères avec une virgule comme séparateur décimal
  const formattedPrice = price?.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    price !== "" && (
      <span className={`font-bold text-3xl ${className}`}>
        {formattedPrice} €
      </span>
    )
  );
}

export default PriceComponent;
