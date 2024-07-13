import useCartStore from "@/stores/useCartStore";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

function SelectProductQuantity({ productId, quantity }) {
  const { updateProductQuantity } = useCartStore();

  return (
    <div className="flex w-fit h-10 px-2 py-1 gap-1 md:px-4 md:py-3 md:h-12 md:gap-2 justify-center items-center bg-color-hover-cancel-button rounded-full">
      {quantity}
      <span className="flex flex-col h-fit justify-center items-center">
        <IoChevronUpOutline
          className="cursor-pointer hover:text-color-gold"
          onClick={() => updateProductQuantity(productId, true)}
        />
        <IoChevronDownOutline
          className="cursor-pointer hover:text-color-gold"
          onClick={() => updateProductQuantity(productId, false)}
        />
      </span>
    </div>
  );
}

export default SelectProductQuantity;
