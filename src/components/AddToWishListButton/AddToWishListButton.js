import React from "react";
import { SlHeart } from "react-icons/sl";

function AddToWishListButton({ product, className }) {
  return <SlHeart className={`w-6 h-6 "ml-4" ${className}`} />;
}

export default AddToWishListButton;
