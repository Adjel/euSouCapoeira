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
    <div className="flex flex-col w-full h-full gap-10">
      {userCommands.map(({ productList }) =>
        productList.map(({ name, id }) => (
          <ul key={id} className="w-full h-full">
            <li>
              <EvaluateProductItem
                key={id}
                user={user}
                name={name}
                productId={id}
              />
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default EvaluateProductComponent;
