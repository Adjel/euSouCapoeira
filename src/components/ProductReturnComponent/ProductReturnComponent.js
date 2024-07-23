"use client";
import React, { useEffect, useState } from "react";
import ReturnStepsProgressComponent from "../ReturnStepsProgressComponent";
import ArrowButton from "../ArrowButton";
import { useCommandsStore } from "@/stores/useCommandsStore";
import { Checkbox } from "@/components/ui/checkbox";
import CategoryItem from "../Categories/CategoryItem";

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

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  const toggleSelectProudct = (commandId, productId) => {
    const command = commands.find((item) => item.commandId === commandId);
    const product = command.products.find((item) => item.id === productId);
    setProductList((prevProductList) => {
      const exsitingProduct = productList.find(
        (item) => item.product.id === productId && item.commandId === commandId
      );
      if (!exsitingProduct) {
        console.log(exsitingProduct);
        return [
          ...prevProductList,
          {
            commandId: commandId,
            product: { ...product },
          },
        ];
      } else {
        const test = prevProductList.filter(
          (item) =>
            item.product.id !== productId && item.commandId !== commandId
        );
        return test;
      }
    });
  };

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
      <section className="flex flex-col justify-center items-center">
        {commands
          .filter((command) => command.status === "processed")
          .map(({ products, commandId }) => (
            <div
              key={commandId}
              className="flex gap-2 justify-center items-center"
            >
              {products.map(({ name, imageSrc, alt, id }) => (
                <div
                  key={id}
                  className="flex gap-2 justify-center items-center"
                >
                  <Checkbox
                    className="rounded size-6"
                    onClick={() => toggleSelectProudct(commandId, id)}
                  />
                  <CategoryItem
                    title={name}
                    image={imageSrc}
                    alt={alt}
                    preLink={""}
                  />
                </div>
              ))}
            </div>
          ))}
      </section>
    </section>
  );
}

export default ProductReturnComponent;
