import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";
import "./productQuantityButton.module.css";

function ProductQuantityButton({ productId, quantity, onClick, className }) {
  return (
    <div
      className={`flex w-16 h-12 px-2 py-1 gap-1 md:px-4 md:py-3 md:h-12 md:gap-2 justify-center items-center bg-color-hover-cancel-button rounded-full ${className}`}
    >
      {quantity}
      <div className="flex flex-col h-fit justify-center items-center">
        <button className="button">
          <IoChevronUpOutline onClick={() => onClick(productId, true)} />
        </button>
        <button className="button">
          <IoChevronDownOutline onClick={() => onClick(productId, false)} />
        </button>
      </div>
    </div>
  );
}

export default ProductQuantityButton;
