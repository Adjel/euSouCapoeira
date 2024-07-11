"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import useCartStore from "@/stores/useCartStore";

export default function page() {
  const { cart } = useCartStore();

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  return (
    <section>
      <header>
        <h2>votre panier</h2>
      </header>
      <div>
        {cart?.length > 0 ? (
          cart.map(({ name, id, image, alt, price, availability }) => (
            <div className="flex flex-col gap-4" key={id}>
              <Link
                href={`product/${id}`}
                className="xs:flex-row relative flex flex-col min-w-fit gap-4 p-7 bg-background-medium-gray rounded"
              >
                <Image
                  alt={alt}
                  src={image}
                  className="max-w-24 max-h-24"
                  // Todo: delete
                  height={24}
                  width={24}
                />
                <div className=" flex flex-col gap-0.5">
                  {name}
                  <AvailabilityComponent availability={availability} />
                  <PriceComponent price={price} />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>{`Votre panier est vide :(`}</div>
        )}
      </div>
    </section>
  );
}
