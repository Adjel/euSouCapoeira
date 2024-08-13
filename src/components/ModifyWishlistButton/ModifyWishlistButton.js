import React from "react";
import { PiPencilSimpleThin } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { useWishlist } from "@/stores/useWishlistStore";

function ModifyWishlistButton() {
  const { toggleModify, setToggleModify } = useWishlist();

  return (
    <button
      onClick={setToggleModify}
      className={`flex w-12 h-12 justify-center items-center ${
        toggleModify ? "bg-color-gold" : "bg-black"
      } rounded-full hover:bg-color-gold`}
    >
      {!toggleModify ? (
        <PiPencilSimpleThin color="white" className="size-8" />
      ) : (
        <FaCheck color="black" className="size-5" />
      )}
    </button>
  );
}

export default ModifyWishlistButton;
