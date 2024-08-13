import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function WishlistDeleteProductButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <RiDeleteBinLine className="w-6 h-6 text-extreme-dark-gray" />
    </button>
  );
}

export default WishlistDeleteProductButton;
