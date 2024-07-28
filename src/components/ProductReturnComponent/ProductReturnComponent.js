"use client";
import React, { useEffect, useState } from "react";
import ReturnProdutStepsProgressComponent from "../ReturnStepsProgressComponent";
import ArrowButton from "../ArrowButton";
import { useCommandsStore } from "@/stores/useCommandsStore";
import ReturnProductItem from "../ReturnProductItem";
import CategoryItem from "../Categories/CategoryItem";

function ProductReturnComponent() {
  const { commands } = useCommandsStore();
  const [returnProductList, setReturnProductList] = useState([]);
  const [inputError, setInputError] = useState({
    error: "",
    productId: "",
    commandId: "",
  });
  const [steps, setSteps] = useState([
    {
      step: "produits",
      state: "current",
    },
    { step: "détails", state: "todo" },
    { step: "terminé", state: "todo" },
  ]);

  useEffect(() => {
    console.log(inputError);
  }, [inputError]);

  const toggleSelectProduct = (commandId, productId) => {
    const command = commands.find((item) => item.commandId === commandId);
    const product = command.products.find((item) => item.id === productId);
    setReturnProductList((prevProductList) => {
      const exsitingProduct = prevProductList.find(
        (item) => item.product.id === productId && item.commandId === commandId
      );
      if (!exsitingProduct) {
        return [
          ...prevProductList,
          {
            commandId: commandId,
            product: { ...product },
            checked: true,
            reason: "",
            details: "",
          },
        ];
      } else {
        return prevProductList.filter(
          (item) =>
            !(item.product.id === productId && item.commandId === commandId)
        );
      }
    });
  };

  const setProductReturnReason = (commandId, productId, reasonOption) => {
    const command = commands.find((item) => item.commandId === commandId);
    const product = command.products.find((item) => item.id === productId);
    if (product) {
      setReturnProductList((prevProductList) => {
        const newList = prevProductList.map((item) =>
          item.product.id === productId && item.commandId === commandId
            ? {
                ...item,
                commandId: commandId,
                reason: reasonOption,
              }
            : item
        );
        return newList;
      });
    }
  };

  const setProductReturnDetails = (commandId, productId, value) => {
    setReturnProductList((prevList) => {
      const newList = prevList.map((item) => {
        return item.commandId === commandId && item.product.id === productId
          ? {
              ...item,
              details: value,
            }
          : item;
      });
      return newList;
    });
  };

  const getStep = () => {
    const step = steps.find((item) => item.state === "current");
    return step.step;
  };

  const onToggleStep = (isNext) => {
    if (!isNext && getStep() === "détails") {
      setReturnProductList([]);
    }
    const checkReturnProductList = () => {
      return returnProductList.some((item) => !item.reason);
    };

    if (isNext && checkReturnProductList()) {
      // If trying to go to next step and there are items without a reason, trigger Error displays and return

      setInputError({
        error: "Vous devez selectionner une raison",
        productId: "",
        commandId: "",
      });
      return;
    }

    setSteps((prevSteps) => {
      const currentIndex = prevSteps.findIndex(
        (step) => step.state === "current"
      );

      if (currentIndex === -1) {
        // If no current step is found, do nothing
        return prevSteps;
      }

      const newSteps = prevSteps.map((step, index) => {
        if (isNext) {
          if (index === currentIndex) return { ...step, state: "done" };
          if (index === currentIndex + 1) return { ...step, state: "current" };
        } else if (index === currentIndex - 1) {
          return { ...step, state: "current" };
        } else if (index === currentIndex) {
          return { ...step, state: "todo" };
        }
        return step;
      });
      return newSteps;
    });
  };

  // verify if each product to return have a detail
  const onFinish = () => {
    console.log(returnProductList);
    if (
      returnProductList.find((item) => item.details === "" || !item.details)
    ) {
      returnProductList.map((item) => {
        (item.details === "" || !item.details) &&
          (console.log(item),
          setInputError({
            error: "Ce cham est requis",
            productId: item.product.id,
            commandId: item.commandId,
          }));
      });
      return;
    }
    onToggleStep(true);
  };

  return (
    <section className="flex flex-col items-center p-7">
      <ReturnProdutStepsProgressComponent steps={steps} />

      {getStep() === "produits" ? (
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
                    setProductReturnReason={setProductReturnReason}
                    error={inputError.error}
                  />
                ))}
              </div>
            ))}
          <span className="flex w-full gap-12 justify-center">
            {returnProductList.length > 0 && (
              <ArrowButton className="w-fit" onClick={() => onToggleStep(true)}>
                Etape suivante
              </ArrowButton>
            )}
          </span>
        </section>
      ) : getStep() === "détails" ? (
        <section className="flex flex-col w-full gap-8">
          {returnProductList.map(({ product, reason, details, commandId }) => (
            <form
              key={`${commandId}` + `${product.id}`}
              className="flex p-7 flex-col w-full justify-center gap-10 border rounded-xl"
            >
              <div className="flex flex-col justify-center gap-6">
                <CategoryItem
                  key={product.id}
                  title={product.name}
                  image={product.imageSrc}
                  alt={product.alt}
                  preLink={""}
                />
                <span>{reason}</span>
                <textarea
                  className="p-4 min-h-40 w-full border rounded border-color-dark-gray"
                  placeholder="Pouvez-vous décrire le problème svp:"
                  type="text"
                  value={details}
                  onChange={(event) =>
                    setProductReturnDetails(
                      commandId,
                      product.id,
                      event.target.value
                    )
                  }
                />
                {commandId === inputError.commandId &&
                  product.id === inputError.productId &&
                  inputError.error !== "" && (
                    <span className="text-color-error mr-auto">
                      {inputError.error}
                    </span>
                  )}
              </div>
            </form>
          ))}
          <span className="flex w-full gap-12 justify-center">
            <ArrowButton
              className="w-fit"
              isReverse={true}
              onClick={() => onToggleStep(false)}
            >
              Etape précédante
            </ArrowButton>
            <ArrowButton className="w-fit" onClick={onFinish}>
              terminer
            </ArrowButton>
          </span>
        </section>
      ) : (
        <>Votre demande à été envoyée, vous serez recontacté par email</>
      )}
    </section>
  );
}

export default ProductReturnComponent;
