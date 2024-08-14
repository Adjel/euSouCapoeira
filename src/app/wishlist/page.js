"use client";
import React, { useEffect, useState } from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/stores/useUserStore";
import RatingComponent from "@/components/RatingComponent";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import WishlistProductQuantityButton from "@/components/WishlistProductQuantityButton";
import WishlistDeleteProductButton from "@/components/WishlistDeleteProductButton";
import WishlistMobileMenuButton from "@/components/WishlistMobileMenuButton";
import WishlistTitleItem from "@/components/WishlistTitleItem";
import ModifyWishlistButton from "@/components/ModifyWishlistButton";
import DeleteWishlistButton from "@/components/DeleteWishlistButton";
import WishlistMobileMenu from "@/components/WishlistMobileMenu";
import NewWishlistButton from "@/components/NewWishlistButton";

function Page() {
  const { user } = useUserStore();
  const {
    wishlistTable,
    createWishlist,
    toggle,
    toggleQuantity,
    toggleModify,
    setCurrentWishlist,
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

    if (wishlistName === "") {
      setWishlistName((prevSate) => prevSate);
      setToggleWishlistName(false);
      return;
    }

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
    <div className="flex flex-col gap-4 lg:mr-4 xl:mr-12">
      <WishlistMobileMenuButton />
      <div className="flex flex-row p-0 lg:pt-12 lg:pb-5">
        <div className="hidden lg:flex flex-col w-2/5 gap-7 ml-16">
          <NewWishlistButton />
          {wishlistTable?.length > 0 && (
            <div className="flex flex-col w-full h-full gap-7">
              {wishlistTable?.map(({ id, name, isCurrent, idList, date }) => (
                <div
                  className="flex w-full h-fit gap-4 justify-start items-center"
                  key={id}
                >
                  <Button
                    onClick={() => setCurrentWishlist(user, id)}
                    className="bg-transparent text-black shadow-none hover:bg-transparent"
                  >
                    <WishlistTitleItem
                      isCurrent={isCurrent}
                      name={name}
                      idList={idList}
                      date={date}
                    />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col px-7 w-full h-full gap-6">
          <div className="flex">
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
              <h2
                className="text-3xl font-bold first-letter:uppercase"
                onClick={handleToggleWishlistName}
              >
                {currentWishlist.name}
              </h2>
            )}
          </div>
          <div
            className={`transition-all duration-500 transform ease-in-out ${
              toggleModify ? "h-fit" : "h-0"
            }`}
          >
            <DeleteWishlistButton user={user} wishlistId={currentWishlist.id} />
          </div>
          <div
            className={`flex w-full justify-end transition-all duration-500 transform ease-in-out ${
              toggleModify ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            <ModifyWishlistButton />
          </div>
          <div
            className={`flex flex-col w-full gap-2 transition-all duration-500 transform ease-in-out ${
              toggleModify ? "translate-y-0" : "-translate-y-10"
            }`}
          >
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
                <div key={product.id} className="flex flex-col w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm w-full">{product.name}</span>
                    <AvailabilityComponent
                      availability={product.availability}
                      className="text-xs"
                    />
                    <div className="hidden lg:block">
                      <RatingComponent userRate={product.rates} />
                    </div>
                    <PriceComponent
                      price={product.price}
                      className="text-base"
                    />
                  </div>
                  <div className="flex flex-row w-full">
                    <WishlistDeleteProductButton
                      onClick={() => toggle(user, product.id)}
                    />
                    <div className="flex ml-auto justify-center items-center">
                      <WishlistProductQuantityButton
                        onClick={toggleQuantity}
                        user={user}
                        productId={product.id}
                        quantity={product.quantity}
                      />
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WishlistMobileMenu wishlistTable={wishlistTable} />
    </div>
  );
}

export default Page;
