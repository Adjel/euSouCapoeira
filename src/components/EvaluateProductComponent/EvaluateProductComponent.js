import React, { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import EvaluateProductItem from "../EvaluateProductItem";
import { useEvalStore } from "@/stores/useEvalStore";

function EvaluateProductComponent() {
  const { user } = useUserStore();
  const {
    userCommandsWithEvals,
    getUserProductsAndEvals,
    getCommandsProductsTotalRates,
    commandsProductsTotalRates,
  } = useEvalStore();

  useEffect(() => {
    getCommandsProductsTotalRates(userCommandsWithEvals);
    console.log(userCommandsWithEvals);
  }, [userCommandsWithEvals]);

  useEffect(() => {
    getUserProductsAndEvals(user);
  }, [user]);

  const getTotalProductRatesById = (id) => {
    return commandsProductsTotalRates.find((pEval) => pEval.productId === id)
      ?.rates;
  };

  return (
    <div className="flex flex-col w-full h-full p-7 gap-10">
      <header className="flex flex-col w-full h-full gap-6">
        <h2 className="text-3xl font-bold">Evaluer un produit</h2>
        <h3 className="text-lg">
          Vous pouvez laisser une note et/ou un commentaire pour chacun des
          produits que vous avez acheté
        </h3>
      </header>

      <ul
        key={crypto.randomUUID()}
        className="flex flex-col gap-12 w-full h-full"
      >
        {userCommandsWithEvals.map(
          ({ id, name, images, title, comment, rate }) => (
            <li key={`${crypto.randomUUID()}-${id}`}>
              <EvaluateProductItem
                id={id}
                user={user}
                name={name}
                rate={rate}
                image={images[0].image}
                alt={images[0].alt}
                title={title}
                comment={comment}
                note={rate}
                productEvals={getTotalProductRatesById(id)}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default EvaluateProductComponent;
