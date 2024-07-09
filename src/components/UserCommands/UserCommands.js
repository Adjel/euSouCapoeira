import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Label from "../Label";
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
      {commands.map(({ products, date, id, totalPrice, status }) => (
        <div key={id} className="flex flex-col">
          <Divider />
          {products.map(({ imageSrc, alt, id }, index) => (
            // TODO: link have to be a reel link to product page with the product id in params
            <Link href={`/products/id:${id}`}>
              <Image
                key={index}
                src={imageSrc}
                alt={alt}
                width={100}
                height={100}
                className="py-6"
              />
            </Link>
          ))}

          <div className="flex w-1/2 md:w-full justify-between items-center gap-6 mb-4">
            <div className="flex flex-col gap-6 md:flex-row">
              <Label title="commande du" content={date.toLocaleDateString()} />
              <Label title="commande n°" content={id} />
            </div>
            <div className="flex flex-col gap-6 md:flex-row">
              <Label title="prix total" content={`${totalPrice} €`} />
              <Label title="statut" status={status} />
            </div>
            <Button className="hidden md:flex md:mx-6 lg:mx-32">Détails</Button>
          </div>
          <Button className="md:hidden w-fit mb-6">Détails</Button>
          <Divider />
        </div>
      ))}
    </section>
  );
}

export default MyCommands;
