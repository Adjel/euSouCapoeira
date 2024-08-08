import { useWishList } from "@/stores/useUserStore";
import React from "react";
import { SlHeart } from "react-icons/sl";

function AddToWishListButton({ productId, ml }) {
  const { toggle, getProductsByWishList } = useWishList();
  const likedProducts = getProductsByWishList();

  const liked = likedProducts.some((productList) =>
    productList.some((product) => product.id === productId)
  );

  return (
    <SlHeart
      onClick={() => toggle(productId)}
      className={`w-6 h-6 cursor-pointer ${ml ?? "ml-4"}`}
      style={{ fill: liked ? "red" : "currentColor" }}
    />
  );
}

export default AddToWishListButton;
