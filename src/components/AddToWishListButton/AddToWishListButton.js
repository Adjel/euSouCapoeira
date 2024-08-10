import React from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { SlHeart } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";

function AddToWishListButton({ productId, ml }) {
  const { toggle, currentWishlist } = useWishlist();
  const liked = currentWishlist.idList.find((id) => id === productId);

  return !liked ? (
    <SlHeart
      onClick={() => toggle(productId)}
      className={`w-6 h-6 cursor-pointer ${ml ?? "ml-4"}`}
    />
  ) : (
    <FaHeart
      onClick={() => toggle(productId)}
      className={`w-6 h-6 cursor-pointer ${ml ?? "ml-4"} text-color-red`}
    />
  );
}

export default AddToWishListButton;
