import useCartStore from "@/stores/useCartStore";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function DeleteProductFromCartButton({ productId }) {
  const { removeFromCart } = useCartStore();

  return (
    <RiDeleteBinLine
      className="ml-4 w-6 h-6 text-extreme-dark-gray"
      onClick={() => removeFromCart(productId)}
    />
  );
}

export default DeleteProductFromCartButton;
