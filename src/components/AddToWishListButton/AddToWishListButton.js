import React from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { SlHeart } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { useUserStore } from "@/stores/useUserStore";

function AddToWishListButton({ productId, ml }) {
  const { user } = useUserStore();
  const { toggle, currentWishlist } = useWishlist();
  const liked = currentWishlist.idList.find((obj) => obj.id === productId);

  const handleToogle = () => {
    toggle(user, productId);
  };

  return !liked ? (
    <SlHeart
      onClick={handleToogle}
      className={`w-6 h-6 cursor-pointer ${ml ?? "ml-4"}`}
    />
  ) : (
    <FaHeart
      onClick={handleToogle}
      className={`w-6 h-6 cursor-pointer ${ml ?? "ml-4"} text-color-red`}
    />
  );
}

export default AddToWishListButton;
