"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import useCartStore from "@/stores/useCartStore";
import ProductQuantityButton from "@/components/ProductQuantityButton";
import AddToWishListButton from "@/components/AddToWishListButton";
import DeleteProductFromCartButton from "@/components/DeleteProductFromCartButton";
import ArrowButton from "@/components/ArrowButton";
import TotalCartPriceComponent from "@/components/TotalCartPriceComponent";
import RecommandsComponent from "@/components/RecommandsComponent";

export default function page() {
  const { cart } = useCartStore();
  const { updateProductQuantity } = useCartStore();

  return (
    <section className="flex flex-col p-10 gap-6">
      <header className="">
        <h2 className="first-letter:uppercase text-4xl md:text-6xl font-bold">
          votre panier
        </h2>
      </header>
      <section className="flex flex-col gap-6">
        <ol>
          {cart?.length > 0 ? (
            cart.map(({ name, id, images, price, availability, quantity }) => (
              <li
                key={id}
                className="flex gap-4 border-t bt-background-medium-gray"
              >
                <Link href={`product/${id}`}>
                  <Image
                    src={images[0].image}
                    alt={images[0].alt}
                    className="max-w-14 max-h-14 md:max-w-24 md:max-h-24"
                  />
                </Link>
                <div className="flex flex-col w-full p-2 gap-3 justify-between">
                  <div className="flex justify-between gap-4">
                    <Link href={`product/${id}`} className="flex flex-col ">
                      <strong className="text-lg font-bold">{name}</strong>
                      {quantity > 1 && (
                        <span className="text-sm text-color-dark-gray">{`${price} € / pièce`}</span>
                      )}
                      <AvailabilityComponent availability={availability} />
                    </Link>
                    <ProductQuantityButton
                      productId={id}
                      quantity={quantity}
                      onClick={updateProductQuantity}
                    />
                  </div>
                  <div className="flex flex-col xs:flex-row justify-between">
                    <div className="flex">
                      <DeleteProductFromCartButton productId={id} />
                      <AddToWishListButton />
                    </div>
                    <PriceComponent price={price * quantity} />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center h-48 text-center uppercase border-2">
              <span>Votre panier est vide</span>
              <br />
              <span className="rotate-90">{`:(`}</span>
            </div>
          )}
        </ol>
        {cart?.length > 0 && (
          <section className="flex flex-col w-1/2 mx-auto mb-28 p-7 gap-6 justify-center items-center bg-color-hover-cancel-button rounded-xl">
            <TotalCartPriceComponent />
            <ArrowButton href={"/checkout"} text={"Aller à la caisse"} />
          </section>
        )}
      </section>
      <RecommandsComponent title={"Recommandés pour vous"} />
    </section>
  );
}
