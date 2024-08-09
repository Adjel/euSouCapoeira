"use client";
import React, { useEffect, useState } from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { Button } from "@/components/ui/button";

function Page() {
  const { wishlistTable, createWishlist, setCurrentWishlist } = useWishlist();
  const [currentlist, setCurrentList] = useState([]);

  useEffect(() => {
    if (wishlistTable?.length > 0) {
      setCurrentList(wishlistTable.find((wishlist) => wishlist.isCurrent));
    }
  }, [wishlistTable]);

  return (
    <div className="flex gap-7">
      <div className="p-7 w-full h-full flex flex-col gap-6">
        <Button className="w-fit" onClick={() => createWishlist()}>
          + nouveau{" "}
        </Button>
        {wishlistTable?.length > 0 && (
          <div className="flex flex-col w-full h-full">
            {wishlistTable.map(({ id, name, isCurrent }) => (
              <div
                className="flex w-full h-fit gap-4 justify-start items-center "
                key={id}
              >
                <Button
                  className="bg-transparent text-black shadow-none hover:bg-transparent"
                  onClick={() => setCurrentWishlist(id)}
                >
                  <span className={`${isCurrent && "text-color-gold"}`}>
                    {name}
                  </span>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      {currentlist?.idList?.map((id) => (
        <span>{id}</span>
      ))}
    </div>
  );
}

export default Page;
