import useCartStore from "@/stores/useCartStore";
import React from "react";
import { SlBasket } from "react-icons/sl";

function BasketAddButton({ product }) {
  const { addToCart } = useCartStore();

  function addProduct() {
    console.log({ product });
    addToCart(product);
  }

  return <SlBasket className="ml-4 w-6 h-6" onClick={addProduct} />;
}

export default BasketAddButton;
