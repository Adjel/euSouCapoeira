"use client";
import React from "react";
import { useWishList } from "@/stores/useWishlistTableStore";
import { Button } from "@/components/ui/button";

function Page() {
  const { wishlistTable, createWishList } = useWishList();

  return (
    <div className="p-7 w-full h-full flex flex-col gap-6">
      <Button className="w-fit" onClick={() => createWishList()}>
        + nouveau{" "}
      </Button>
      {wishlistTable.length > 0 && (
        <div className="flex flex-col w-full h-full">
          {wishlistTable.map((wishlist) => (
            <div className="w-full h-fit" key={wishlist.id}>
              <span className="">{wishlist.name}</span>
              {wishlist.idList.map((productId) => (
                <span key={productId}>{productId}</span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
