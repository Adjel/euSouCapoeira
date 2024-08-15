"use client";
import React, { useState } from "react";
import ReturnProdutStepsProgressComponent from "../ReturnProdutStepsProgressComponent";
import ArrowButton from "../ArrowButton";
import { useCommandsStore } from "@/stores/useCommandsStore";
import ReturnProductItem from "../ReturnProductItem";
import ReturnProductDetailItem from "../ReturnProductDetailItem";
import { Button } from "../ui/button";
import Link from "next/link";

function ReturnProductComponent() {
  const { userCommands } = useCommandsStore();
  const [returnProductList, setReturnProductList] = useState([]);
  const [inputError, setInputError] = useState("");
  const [steps, setSteps] = useState([
    { step: "produits", state: "current" },
    { step: "détails", state: "todo" },
    { step: "terminé", state: "todo" },
  ]);

  const findCommandProduct = (commandId, productId) => {
    const command = userCommands.find((cmd) => cmd.commandId === commandId);
    return command
      ? command.products.find((prod) => prod.id === productId)
      : null;
  };

  const toggleSelectProduct = (commandId, productId) => {
    const product = findCommandProduct(commandId, productId);
    if (product) {
      setReturnProductList((prevList) => {
        const existingProductIndex = prevList.findIndex(
          (item) =>
            item.product.id === productId && item.commandId === commandId
        );

        if (existingProductIndex === -1) {
          return [
            ...prevList,
            {
              commandId,
              product: { ...product },
              checked: true,
              reason: "",
              details: "",
            },
          ];
        } else {
          return prevList.filter(
            (item) =>
              item.product.id !== productId || item.commandId !== commandId
          );
        }
      });
    }
  };

  const setProductReturnReason = (commandId, productId, reasonOption) => {
    setReturnProductList((prevList) =>
      prevList.map((item) =>
        item.product.id === productId && item.commandId === commandId
          ? { ...item, reason: reasonOption }
          : item
      )
    );
  };

  const setReturnProductDetails = (commandId, productId, value) => {
    setReturnProductList((prevList) =>
      prevList.map((item) =>
        item.commandId === commandId && item.product.id === productId
          ? { ...item, details: value }
          : item
      )
    );
  };

  const getStep = () => steps.find((item) => item.state === "current")?.step;

  const onToggleStep = (isNext) => {
    const currentStep = getStep();

    if (!isNext && currentStep === "détails") {
      setReturnProductList([]);
    }

    if (isNext && returnProductList.some((item) => !item.reason)) {
      setInputError("Vous devez sélectionner une raison");
      return;
    }

    setSteps((prevSteps) => {
      const currentIndex = prevSteps.findIndex(
        (step) => step.state === "current"
      );

      if (currentIndex === -1) return prevSteps;

      return prevSteps.map((step, index) => {
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
    });
  };

  const onFinish = () => {
    const incompleteDetails = returnProductList.filter((item) => !item.details);
    if (incompleteDetails.length > 0) {
      setInputError("Ce champ est requis");
      return;
    }
    onToggleStep(true);
  };

  return (
    <section className="flex flex-col items-center p-7">
      {userCommands.length < 1 ? (
        <header className="flex flex-col w-full gap-12 justify-center items-center">
          <h2 className="text-bold">Ooups</h2>
          <span>{`Avant de retourner un article, il faut passer commande ! :)`}</span>
          <div>
            <Button>
              <Link href="/">Voir nos catégories</Link>
            </Button>
          </div>
        </header>
      ) : (
        <>
          {getStep() === "produits" && (
            <section className="flex flex-col w-full justify-center gap-10">
              <header className="flex flex-col w-full gap-12 justify-center">
                <h2 className="text-2xl md:text-4xl font-bold">
                  Retourner un produit ou signaler un problème
                </h2>
                <span>
                  Vous souhaitez nous retourner un produit, demander une
                  réparation, ou avez des problèmes avec une livraison ? Vous
                  trouverez réponse à vos questions ici.
                </span>
                <ReturnProdutStepsProgressComponent steps={steps} />
              </header>
              <ul className="flex flex-col gap-6">
                {userCommands
                  .filter((command) => command.status === "processed")
                  .map(({ products, commandId, date }) => (
                    <li
                      key={commandId}
                      className="flex flex-col w-full gap-4 justify-center items-start border-2 rounded px-6 py-4"
                    >
                      <div className="flex xs:flex-col sm:flex-row w-full justify-between gap-4 mt-2">
                        <div className="font-bold first-letter:uppercase">
                          <span>commandé le: </span>
                          <span className="font-normal">
                            {new Date(date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="font-bold first-letter:uppercase mr-4">
                          <span>numéro de commande:</span>
                          <span className="font-normal">{commandId}</span>
                        </div>
                      </div>
                      <ul className="flex flex-col w-full">
                        {products.map(({ name, imageSrc, alt, id }) => (
                          <ReturnProductItem
                            key={id}
                            name={name}
                            imageSrc={imageSrc}
                            alt={alt}
                            commandId={commandId}
                            id={id}
                            toggle={() => toggleSelectProduct(commandId, id)}
                            setProductReturnReason={setProductReturnReason}
                            error={inputError}
                          />
                        ))}
                      </ul>
                    </li>
                  ))}
              </ul>
              <div className="flex w-full gap-12 justify-center">
                {returnProductList.length > 0 && (
                  <ArrowButton
                    className="w-fit"
                    onClick={() => onToggleStep(true)}
                  >
                    Etape suivante
                  </ArrowButton>
                )}
              </div>
            </section>
          )}
          {getStep() === "détails" && (
            <section className="flex flex-col w-full gap-8">
              <header className="flex flex-col w-full gap-12">
                <h2 className="text-2xl md:text-4xl font-bold">
                  Pouriez-vous nous donner plus de détails s'il vous plaît?
                </h2>
                <ReturnProdutStepsProgressComponent steps={steps} />
              </header>
              <ul>
                {returnProductList.map(
                  ({ product, commandId, reason, details }) => (
                    <li key={`${commandId}-${product.id}`}>
                      <form className="flex p-7 flex-col w-full justify-center gap-10 border rounded-xl">
                        <ReturnProductDetailItem
                          commandId={commandId}
                          product={product}
                          inputError={inputError}
                          setReturnProductDetails={setReturnProductDetails}
                          reason={reason}
                          details={details}
                        />
                      </form>
                    </li>
                  )
                )}
              </ul>
              <div className="flex w-full gap-12 justify-center">
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
              </div>
            </section>
          )}
          {getStep() === "terminé" && (
            <div className="p-7 w-full min-h-72 flex flex-col gap-16 justify-center items-center">
              <header className="flex flex-col w-full gap-12">
                <h2 className="text-2xl md:text-4xl font-bold">Merci !</h2>
                <span>Demande envoyée</span>
                <ReturnProdutStepsProgressComponent steps={steps} />
              </header>
              <span className="text-center">
                {`
                Votre demande à été envoyée, vous serez recontacté sur votre
                adresse e-mail princispale :)`}
              </span>
              <Button>
                <Link href="/">Retour à l'accueil</Link>
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ReturnProductComponent;
