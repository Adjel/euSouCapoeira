import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ReturnProdutStepsProgressComponent({ steps }) {
  console.log(steps);
  return (
    <div className="flex w-fit md:gap-2 mx-auto items-center">
      {steps.map(({ step, state }) => (
        <>
          <span
            key={step}
            className={`flex flex-col md:flex-row gap-2 justify-center items-center ${
              state === "current"
                ? "text-black border-black"
                : "text-color-hover-cancel-button border-color-hover-cancel-button"
            }`}
          >
            {state === "done" || (step === "terminé" && state === "current") ? (
              <FaCheck className="text-inherit w-4 h-4" />
            ) : (
              <span className="border border-inherit rounded-full w-4 h-4" />
            )}
            <span className="uppercase text-sm">{step}</span>
          </span>
          <span className="last:hidden w-24 h-2 border-b-2 mb-8 md:mb-2" />
        </>
      ))}
    </div>
  );
}
