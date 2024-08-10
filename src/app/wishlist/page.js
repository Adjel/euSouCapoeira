"use client";
import React, { useEffect, useState } from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { Button } from "@/components/ui/button";

function Page() {
  const {
    wishlistTable,
    createWishlist,
    setCurrentWishlist,
    deleteWishlist,
    currentWishlist,
  } = useWishlist();

  console.log(currentWishlist);

  return (
    <div className="flex flex-row gap-7 border-2 border-pink-500">
      <div className="flex flex-col w-1/5 gap-7 border-2 border-yellow-500">
        <Button className="w-fit" onClick={() => createWishlist()}>
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
                  onClick={() => setCurrentWishlist(id)}
                  className="bg-transparent text-black shadow-none hover:bg-transparent"
                >
                  <span className={`${isCurrent && "text-color-gold"}`}>
                    {name}
                  </span>
                </Button>
                <Button onClick={() => deleteWishlist(id)}>supprimer</Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-7 w-full h-full gap-6 border-2 border-green-500">
        <div className="flex border-2 border-red-500">
          <h2>{currentWishlist.name}</h2>
        </div>
        {currentWishlist.idList.map(({ id }) => (
          <div key={id} className="border-2 border-blue-500">
            <span>{id}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
