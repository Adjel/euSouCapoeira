"use client";
import { useWishList } from "@/stores/useUserStore";
import React from "react";

function Page() {
  const { getProductsByWishList } = useWishList();
  const test = getProductsByWishList();
  return (
    <div className="flex flex-col gap-6">
      {test.map((productList) =>
        productList.map(({ name, id }) => <span key={id}>{name}</span>)
      )}
    </div>
  );
}

export default Page;
