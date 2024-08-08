import { useUserStore, useWishList } from "@/stores/useUserStore";
import React from "react";
import { SlHeart } from "react-icons/sl";

function AddToWishListButton({ productId, ml }) {
  const { user } = useUserStore();
  const { toggle } = useWishList();

  const liked = user.wishList.productIdList.find((id) => id === productId);

  return (
    <SlHeart
      onClick={() => toggle(productId)}
      className={`w-6 h-6 cursor-pointer ${ml ?? "ml-4"}`}
      style={{ fill: liked ? "red" : "currentColor" }}
    />
  );
}

export default AddToWishListButton;
