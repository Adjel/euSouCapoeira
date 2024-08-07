import { useWishList } from "@/stores/useUserStore";
import React from "react";
import { SlHeart } from "react-icons/sl";

function AddToWishListButton({ productId, ml }) {
  const { toggle } = useWishList();

  return (
    <SlHeart
      onClick={() => toggle(productId)}
      className={`w-6 h-6 ${ml ?? "ml-4"}`}
    />
  );
}

export default AddToWishListButton;
