"use client";
import { useWishList } from "@/stores/useWishlistTableStore";
import React from "react";

function Page() {
  const { wishlistTable } = useWishList();

  console.log(wishlistTable);

  //console.log(wishlistList);

  //{wishlistList.map((item) => item.idList.map((id) => <span>{id}</span>))}
  return <div className="flex flex-col gap-6"></div>;
}

export default Page;
