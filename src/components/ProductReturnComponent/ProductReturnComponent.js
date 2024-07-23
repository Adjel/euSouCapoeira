"use client";
import React, { useState } from "react";
import ReturnStepsProgressComponent from "../ReturnStepsProgressComponent";
import ArrowButton from "../ArrowButton";
import { useCommandsStore } from "@/stores/useCommandsStore";

function ProductReturnComponent() {
  const { commands } = useCommandsStore();
  const [currentStep, setCurrentStep] = useState("produits");
  const [productList, setProductList] = useState([]);
  const [steps, setSteps] = useState([
    {
      step: "produits",
      state: "current",
    },
    { step: "détails", state: "todo" },
    { step: "terminé", state: "todo" },
  ]);

  const onToggleStep = (isNext) => {
    setSteps((prevSteps) => {
      // Find the index of the current step
      const currentIndex = prevSteps.findIndex(
        (step) => step.state === "current"
      );

      if (currentIndex === -1 || currentIndex === prevSteps.length - 1) {
        // If no step is in progress or if we are already at the last step, do nothing
        return prevSteps;
      }

      // Update steps state
      return prevSteps.map((item, index) => {
        if (isNext) {
          if (index === currentIndex) return { ...item, state: "done" };
          if (index === currentIndex + 1) {
            setCurrentStep(item.step);
            return { ...item, state: "current" };
          }
        } else {
          // We are at the first step, so we can't go back anymore
          if (currentIndex > 0) {
            if (index === currentIndex) {
              return { ...item, state: "todo" };
            }
            if (index === currentIndex - 1)
              return { ...item, state: "current" };
          }
        }
        return item;
      });
    });
  };

  return (
    <section className="flex flex-col items-center">
      <ReturnStepsProgressComponent steps={steps} />
      <span className="flex w-full gap-12 justify-center">
        {currentStep !== "produits" && (
          <ArrowButton
            className="w-fit"
            isReverse={true}
            onClick={() => onToggleStep(false)}
          >
            Etape précédante
          </ArrowButton>
        )}
        {productList > 0 && (
          <ArrowButton className="w-fit" onClick={() => onToggleStep(true)}>
            {currentStep === "détails" ? "terminer" : "Etape suivante"}
          </ArrowButton>
        )}
      </span>
    </section>
  );
}

export default ProductReturnComponent;
