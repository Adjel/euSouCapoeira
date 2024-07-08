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
    <section className="flex flex-col gap-24">
      {commands.map(({ products, date, id, totalPrice, status }) => (
        <div key={id} className="flex flex-col">
          <Divider />
          {products.map(({ imageSrc, alt, link }, index) => (
            // TODO: link have to be a reel link to product page with the product id in params
            <Link href={link}>
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

          <div className="flex w-full justify-between items-center gap-6 mb-4">
            <Label title="commande du" content={date.toLocaleDateString()} />
            <Label title="commande n°" content={id} />
            <Label title="prix total" content={`${totalPrice} €`} />
            <Label title="statut" status={status} />
            <Button className="mx-32">Détails</Button>
          </div>
          <Divider />
        </div>
      ))}
    </section>
  );
}

export default MyCommands;
