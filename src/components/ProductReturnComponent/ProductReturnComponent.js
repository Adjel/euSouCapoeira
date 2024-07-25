"use client";
import React, { useEffect, useState } from "react";
import ReturnProdutStepsProgressComponent from "../ReturnStepsProgressComponent";
import ArrowButton from "../ArrowButton";
import { useCommandsStore } from "@/stores/useCommandsStore";
import ReturnProductItem from "../ReturnProductItem";

function ProductReturnComponent() {
  const { commands } = useCommandsStore();
  const [currentStep, setCurrentStep] = useState("produits");
  const [returnProductList, setReturnProductList] = useState([]);
  const [steps, setSteps] = useState([
    {
      step: "produits",
      state: "current",
    },
    { step: "détails", state: "todo" },
    { step: "terminé", state: "todo" },
  ]);

  const toggleSelectProduct = (commandId, productId) => {
    const command = commands.find((item) => item.commandId === commandId);
    const product = command.products.find((item) => item.id === productId);
    setReturnProductList((prevProductList) => {
      const exsitingProduct = returnProductList.find(
        (item) => item.product.id === productId && item.commandId === commandId
      );
      if (!exsitingProduct) {
        return [
          ...prevProductList,
          {
            commandId: commandId,
            product: { ...product },
            checked: true,
          },
        ];
      } else {
        const product = prevProductList.filter(
          (item) =>
            item.product.id !== productId && item.commandId !== commandId
        );
        return product;
      }
    });
  };

  const setProductReturnResult = (commandId, productId, reasonOption) => {
    const command = commands.find((item) => item.commandId === commandId);
    const product = command.products.find((item) => item.id === productId);
    if (product) {
      setReturnProductList((prevProductList) => {
        const newList = prevProductList.map((item) =>
          item.product.id === productId && item.commandId === commandId
            ? {
                ...item,
                reason: reasonOption,
              }
            : prevProductList
        );
        return [newList];
      });
    }
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
    <section className="flex flex-col items-center p-7">
      <ReturnProdutStepsProgressComponent steps={steps} />

      <section className="flex flex-col w-full justify-center gap-10">
        {commands
          .filter((command) => command.status === "processed")
          .map(({ products, commandId, date }) => (
            <div
              key={commandId}
              className="flex flex-col w-full gap-4 justify-center items-start border-2 rounded px-6 py-4"
            >
              <div className="flex xs:flex-col sm:flex-row w-full justify-between gap-4 mt-2">
                <div className="font-bold first-letter:uppercase">
                  commandé le:{" "}
                  <span className="font-normal">
                    {date.toLocaleDateString()}
                  </span>
                </div>
                <div className="font-bold first-letter:uppercase mr-4">
                  numéro de commande:
                  <span className="font-normal">{commandId}</span>
                </div>
              </div>
              {products.map(({ name, imageSrc, alt, id }) => (
                <ReturnProductItem
                  name={name}
                  imageSrc={imageSrc}
                  alt={alt}
                  key={id}
                  commandId={commandId}
                  id={id}
                  toggle={() => toggleSelectProduct(commandId, id)}
                  setProductReturnResult={setProductReturnResult}
                />
              ))}
            </div>
          ))}
        <span className="flex w-full gap-12 justify-center">
          {currentStep !== "produits" && (
            <ArrowButton
              type="onSubmit"
              className="w-fit"
              isReverse={true}
              onClick={() => onToggleStep(false)}
            >
              Etape précédante
            </ArrowButton>
          )}
          {returnProductList.length > 0 && (
            <ArrowButton className="w-fit" onClick={() => onToggleStep(true)}>
              {currentStep === "détails" ? "terminer" : "Etape suivante"}
            </ArrowButton>
          )}
        </span>
      </section>
    </section>
  );
}

export default ProductReturnComponent;
