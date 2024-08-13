import React from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { RiDeleteBinLine } from "react-icons/ri";

function DeleteWishlistButton({ user, wishlistId }) {
  const { deleteWishlist, toggleModify } = useWishlist();

  //toggleModify ? "flex " : "hidden"
  return (
    <button
      onClick={() => deleteWishlist(user, wishlistId)}
      className={`transition-all duration-500 transform ${
        toggleModify ? " opacity-100 " : "opacity-0 pointer-events-none"
      }
      } flex flex-row w-fit p-4 gap-2 justify-center items-center text-xl font-bold border border-black rounded-full`}
    >
      <RiDeleteBinLine className="size-7" />
      Supprimer la liste d'envies
    </button>
  );
}

export default DeleteWishlistButton;
