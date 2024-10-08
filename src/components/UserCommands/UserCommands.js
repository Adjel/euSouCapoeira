import React, { useEffect } from "react";
import Image from "next/image";
import CommandState from "../CommandStateLabel";

import Divider from "../Divider";
import Link from "next/link";
import { useUserStore } from "@/stores/useUserStore";
import { useCommandsStore } from "@/stores/useCommandsStore";
import LoadingComponent from "../LoadingComponent";
import { getProductLinkById } from "@/providers/productProvider";

function MyCommands() {
  const { userCommands, getCommands } = useCommandsStore();
  const { user } = useUserStore();

  useEffect(() => {
    const fetchCommands = async () => {
      await getCommands(user);
    };
    if (user) fetchCommands();
  }, [user]);

  return !userCommands ? (
    <LoadingComponent />
  ) : (
    <section className="flex flex-col gap-4 pl-4 md:pl-8">
      <header>
        <h2 className="text-5xl font-bold first-letter:uppercase">
          mes commandes
        </h2>
      </header>
      {userCommands.length > 0 ? (
        <ol className="flex flex-col gap-16 mt-20">
          {userCommands.map(({ productList, date, id, status, totalPrice }) => (
            <li key={id} className="flex flex-col">
              <Divider />
              {productList.map(({ images, id, name, quantity }, index) => (
                <div
                  key={`${crypto.randomUUID}-${index}`}
                  className="flex flex-col justify-between"
                >
                  <Link
                    href={`${getProductLinkById(id)}`}
                    className="flex gap-12 items-center"
                  >
                    <Image
                      src={images[0].image}
                      alt={images[0].alt}
                      width={100}
                      height={100}
                      className="py-6"
                    />
                    <strong className="first-letter:uppercase text-lg font-normal">
                      {name}
                    </strong>
                  </Link>
                  <span className="text-color-dark-gray text-md font-bold">
                    {quantity}
                  </span>
                </div>
              ))}
              <div className="flex w-1/2 md:w-full justify-start items-center gap-6 my-4">
                <div className="flex flex-col gap-6 md:flex-row">
                  <CommandState
                    title="commande du"
                    content={new Date(date).toLocaleDateString()}
                  />
                  <CommandState title="commande n°" content={id} />
                </div>
                <div className="flex flex-col gap-6 md:flex-row justify-center items-center">
                  <CommandState
                    title="prix total"
                    content={`${totalPrice.toFixed(2)} €`}
                  />
                  <CommandState title="statut" status={status} />
                </div>
              </div>
              <Divider />
            </li>
          ))}
        </ol>
      ) : (
        <div className="flex p-7 w-full min-h-72 justify-center items-center">
          <div className="w-full min-h-72 flex justify-center items-center border border-color-dark-gray rounded-xl">
            <span className="text-center text-3xl font-bold">{`Vous n'avez pas passé de commande pour le moment :(`}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default MyCommands;
