import React from "react";
import { SlHeart } from "react-icons/sl";

function AddToWishListButton({ product, ml }) {
  return <SlHeart className={`w-6 h-6 ${ml ?? "ml-4"}`} />;
}

export default AddToWishListButton;
