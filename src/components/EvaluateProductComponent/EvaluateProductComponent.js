import React, { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import { useCommandsStore } from "@/stores/useCommandsStore";
import EvaluateProductItem from "../EvaluateProductItem";

function EvaluateProductComponent() {
  const { user } = useUserStore();
  const { userCommands, getCommands } = useCommandsStore();

  useEffect(() => {
    getCommands(user);
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-7 gap-10">
      <header className="flex flex-col w-full h-full gap-6">
        <h2 className="text-3xl font-bold">Evaluer un produit</h2>
        <h3 className="text-lg">
          Vous pouvez laisser une note et/ou un commentaire pour chacun des
          produits que vous avez acheté
        </h3>
      </header>

      {userCommands.map(({ productList }) => (
        <ul
          key={crypto.randomUUID()}
          className="flex flex-col gap-2 w-full h-full"
        >
          {productList.map((product) => (
            <li key={product.id}>
              <EvaluateProductItem user={user} product={product} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default EvaluateProductComponent;
