import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

function WishlistProductQuantityButton({ user, productId, quantity, onClick }) {
  console.log(productId);
  return (
    <div className="flex w-fit h-fit px-2 py-1 md:px-4 md:py-3 gap-3 justify-center items-center">
      {quantity}
      <div className="flex flex-col h-fit justify-center items-center">
        <button className="button">
          <IoChevronUpOutline
            onClick={() => onClick(user, productId, quantity, true)}
          />
        </button>
        <button className="button">
          <IoChevronDownOutline
            onClick={() => onClick(user, productId, quantity, false)}
          />
        </button>
      </div>
    </div>
  );
}

export default WishlistProductQuantityButton;
