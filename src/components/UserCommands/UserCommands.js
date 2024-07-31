import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import CommandState from "../CommandStateLabel";
import { useCommandsStore } from "@/stores/useCommandsStore";
import Divider from "../Divider";
import Link from "next/link";

function MyCommands() {
  const { commands } = useCommandsStore();

  return (
    <section className="flex flex-col gap-24 pl-4 md:pl-8">
      <header>
        <h2 className="text-5xl font-bold first-letter:uppercase">
          mes commandes
        </h2>
      </header>
      <ol>
        {commands.map(({ products, date, id, totalPrice, status }) => (
          <li key={id} className="flex flex-col">
            <Divider />
            {products.map(({ imageSrc, alt, id, name }, index) => (
              <Link
                href={`/product/${id}`}
                key={index}
                className="flex gap-12 items-center"
              >
                <Image
                  src={imageSrc}
                  alt={alt}
                  width={100}
                  height={100}
                  className="py-6"
                />
                <strong className="first-letter:uppercase text-lg font-normal">
                  {name}
                </strong>
              </Link>
            ))}

            <div className="flex w-1/2 md:w-full justify-between items-center gap-6 mb-4">
              <div className="flex flex-col gap-6 md:flex-row">
                <CommandState
                  title="commande du"
                  content={date.toLocaleDateString()}
                />
                <CommandState title="commande n°" content={id} />
              </div>
              <div className="flex flex-col gap-6 md:flex-row">
                <CommandState title="prix total" content={`${totalPrice} €`} />
                <CommandState title="statut" status={status} />
              </div>
              <Button className="hidden md:flex md:mx-6 lg:mx-32">
                Détails
              </Button>
            </div>
            <Button className="md:hidden w-fit mb-6">Détails</Button>
            <Divider />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default MyCommands;
