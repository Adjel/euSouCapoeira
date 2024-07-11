import React from "react";

function AvailabilityComponent({ availability }) {
  let textColor;
  let content;
  if (availability === "now") {
    textColor = "text-color-green";
    content = "Disponible";
  } else if (availability === "command") {
    textColor = "text-color-yellow";
    content = "Sur commande";
  } else if (availability === "not") {
    textColor = "text-color-red";
    content = "momentanément indisponible";
  } else if (availability === "nostock") {
    textColor = "text-color-red";
    content = "stock épuisé";
  } else {
    textColor = "black";
    content = "Disponibilité inconnue";
  }

  return <div className={`${textColor} first-letter:uppercase`}>{content}</div>;
}

export default AvailabilityComponent;
