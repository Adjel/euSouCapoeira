import useCartStore from "@/stores/useCartStore";
import React from "react";
import { SlBasket } from "react-icons/sl";

function BasketAddButton({ product, ml = "ml-4" }) {
  const { addToCart } = useCartStore();

  return (
    (product.availability === "now" || product.availability === "command") && (
      <SlBasket
        className={`${ml} w-6 h-6 cursor-pointer`}
        onClick={() => addToCart(product)}
      />
    )
  );
}

export default BasketAddButton;
