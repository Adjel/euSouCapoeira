"use client";
import { useWishList } from "@/stores/useUserStore";
import React, { useEffect } from "react";

function Page() {
  const { wishlistList, createWishList } = useWishList();

  useEffect(() => {
    if (!wishlistList || wishlistList.length < 1) createWishList();
  }, [wishlistList]);

  console.log(wishlistList);

  return (
    <div className="flex flex-col gap-6">
      {wishlistList.map((item) => item.idList.map((id) => <span>{id}</span>))}
    </div>
  );
}

export default Page;
