"use client";
import React, { useEffect, useState } from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/useUserStore";
import RatingComponent from "@/components/RatingComponent";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import Image from "next/image";

import { RiDeleteBinLine } from "react-icons/ri";
import AddToCartButton from "@/components/AddToCartButton";
import ProductQuantityButton from "@/components/ProductQuantityButton";
import WishlistProductQuantityButton from "@/components/WishlistProductQuantityButton";

function Page() {
  const { user } = useUserStore();
  const {
    wishlistTable,
    createWishlist,
    toogle,
    toggleQuantity,
    setCurrentWishlist,
    deleteWishlist,
    currentWishlist,
    currentProductWishlist,
    udpateWishlistName,
    getWishlistTableState,
  } = useWishlist();

  const [toggleWishlistName, setToggleWishlistName] = useState(false);
  const [wishlistName, setWishlistName] = useState("");

  useEffect(() => {
    getWishlistTableState(user);
  }, [user]);

  const handleSubmitWishlistName = (event) => {
    event.preventDefault();

    udpateWishlistName(user, wishlistName);
    setToggleWishlistName(false);
    setWishlistName("");
  };

  const handleWishlistName = (event) => {
    setWishlistName(event.target.value);
  };

  const handleToggleWishlistName = () => {
    setToggleWishlistName((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-7 border-2 border-pink-500">
      <div className="hidden md:flex flex-col w-1/5 gap-7 border-2 border-yellow-500">
        <Button className="w-fit" onClick={() => createWishlist(user)}>
          + nouveau
        </Button>
        {wishlistTable?.length > 0 && (
          <div className="flex flex-col w-full h-full border-2 border-red-500">
            {wishlistTable?.map(({ id, name, isCurrent }) => (
              <div
                className="flex w-full h-fit gap-4 justify-start items-center "
                key={id}
              >
                <Button
                  onClick={() => setCurrentWishlist(user, id)}
                  className="bg-transparent text-black shadow-none hover:bg-transparent"
                >
                  <span className={`${isCurrent && "text-color-gold"}`}>
                    {name}
                  </span>
                </Button>
                <Button onClick={() => deleteWishlist(user, id)}>
                  supprimer
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-7 w-full h-full gap-6 border-2 border-green-500">
        <div className="flex border-2 border-red-500">
          {toggleWishlistName ? (
            <form
              onSubmit={(event) => handleSubmitWishlistName(event)}
              className="w-full"
            >
              <input
                className="w-full"
                type="text"
                placeholder={currentWishlist.name}
                value={wishlistName}
                onChange={(event) => handleWishlistName(event)}
              ></input>
            </form>
          ) : (
            <h2 onClick={handleToggleWishlistName}>{currentWishlist.name}</h2>
          )}
        </div>
        <div className="flex flex-col w-full gap-2">
          {currentProductWishlist?.map((product) => (
            <div
              key={product.id}
              className="flex flex-row w-full h-fit px-4 py-2 items-center justify-start bg-background-medium-gray rounded"
            >
              <Image
                alt={product.images[0].alt}
                src={product.images[0].image}
                className="w-20 h-20 md:w-24 md:h-24 p-1 mr-4"
              />
              <div key={product.id} className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-1">
                  <span className="text-sm w-full">{product.name}</span>
                  <AvailabilityComponent
                    availability={product.availability}
                    className="text-xs"
                  />
                  <div className="hidden md:block">
                    <RatingComponent userRate={product.rates} />
                  </div>
                  <PriceComponent price={product.price} className="text-base" />
                </div>
                <div className="flex flex-row w-full">
                  <button>
                    <RiDeleteBinLine
                      className="w-6 h-6 text-extreme-dark-gray"
                      onClick={() => toogle(product.id)}
                    />
                  </button>
                  <div className="flex ml-auto justify-center items-center">
                    <WishlistProductQuantityButton
                      onClick={toggleQuantity}
                      user={user}
                      productId={product.id}
                      quantity={product.quantity}
                    />
                    <AddToCartButton
                      product={product}
                      quantity={product.quantity}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
