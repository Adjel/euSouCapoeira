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

  useEffect(() => {
    console.log(userCommands);
  }, [userCommands]);

  return (
    <div className="flex flex-col w-full h-full p-7 gap-10 border-2 border-red-600">
      <header className="flex flex-col w-full h-full border-2 border-blue-600">
        <h2>Evaluer un produit</h2>
        <h3>
          Vous pouvez laisser une note et/ou un commentaire pour chacun des
          produits que vous avez acheté
        </h3>
      </header>

      {userCommands.map(({ productList }) =>
        productList.map((product) => (
          <ul
            key={product.id}
            className="flex flex-col gap-2 w-full h-full border-blue-600"
          >
            <li>
              <EvaluateProductItem
                key={product.id}
                user={user}
                product={product}
              />
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default EvaluateProductComponent;
