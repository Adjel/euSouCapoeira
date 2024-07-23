import React from "react";

function returnStepsProgressComponent() {
  const steps = ["produits", "détails", "terminé"];

  return (
    <div className="flex gap-4">
      {steps.map((item) => (
        <span key={item} className="flex flex-col gap-4">
          <span className="border-2 border-black rounded-full" />
          <span className="uppercase">{item}</span>
        </span>
      ))}
    </div>
  );
}

export default returnStepsProgressComponent;
