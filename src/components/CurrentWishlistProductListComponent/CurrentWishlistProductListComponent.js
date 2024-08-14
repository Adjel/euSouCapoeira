import { useWishlist } from "@/stores/useWishlistStore";
import React from "react";
import RatingComponent from "@/components/RatingComponent";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import WishlistProductQuantityButton from "@/components/WishlistProductQuantityButton";
import WishlistDeleteProductButton from "@/components/WishlistDeleteProductButton";

function CurrentWishlistProductListComponent({ user }) {
  const { currentProductWishlist, toggle, toggleQuantity } = useWishlist();

  console.log(currentProductWishlist);

  return currentProductWishlist.length > 0 ? (
    currentProductWishlist?.map((product) => (
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
              <RatingComponent rateList={product.rates} />
            </div>
            <PriceComponent price={product.price} className="text-base" />
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
    ))
  ) : (
    <div className="flex justify-center items-center w-full h-72 bg-background-medium-gray rounded-xl">
      <span>{`Vous n'avez encore de produit dans votre liste de souhaits :(`}</span>
    </div>
  );
}

export default CurrentWishlistProductListComponent;
