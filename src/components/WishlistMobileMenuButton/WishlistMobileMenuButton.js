import { useWishlist } from "@/stores/useWishlistStore";
import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function WishlistMobileMenuButton() {
  const { setToggleMenu } = useWishlist();

  return (
    <div className="flex lg:hidden px-7 pt-4 gap-3 justify-start items-center">
      <button onClick={setToggleMenu}>
        <HiOutlineMenuAlt2 className="size-4 sm:size-6 cursor-pointer" />
      </button>
      <h2>Ma liste d'envies</h2>
    </div>
  );
}

export default WishlistMobileMenuButton;
