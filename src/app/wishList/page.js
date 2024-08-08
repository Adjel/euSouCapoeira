"use client";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect } from "react";

function Page() {
  const { user } = useUserStore();
  let wishList;

  useEffect(() => {
    if (user) wishList = user.wishList ?? [];
  }, [user]);

  return (
    <div className="flex flex-col gap-6">
      {wishList.map((productList) =>
        productList.map(({ name, id }) => <span key={id}>{name}</span>)
      )}
    </div>
  );
}

export default Page;
