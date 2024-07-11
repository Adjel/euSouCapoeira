import React from "react";

function AvailabilityComponent({ avalaibility }) {
  let color;
  let content;
  if (avalaibility === "now") {
    color = "color-green";
    content = "Disponible";
  } else if (avalaibility === "command") {
    color = "color-yellow";
    content = "Sur commande";
  } else if (avalaibility === "not") {
    color = "color-red";
    content = "momentanément indisponible";
  } else if (avalaibility === "nostock") {
    color = "color-red";
    content = "stock épuisé";
  } else {
    color = "black";
  }

  return (
    <div className={`text-${color} first-letter:uppercase`}>{content}</div>
  );
}

export default AvailabilityComponent;
