import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function WishlistMobileMenuButton({ toggle }) {
  return (
    <button
      onClick={toggle}
      className="flex lg:hidden px-7 pt-4 gap-3 justify-start items-center"
    >
      <HiOutlineMenuAlt2 className="size-4 sm:size-6 cursor-pointer" />
      <h2>Ma liste d'envies</h2>
    </button>
  );
}

export default WishlistMobileMenuButton;
