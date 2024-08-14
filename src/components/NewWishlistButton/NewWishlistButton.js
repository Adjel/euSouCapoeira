import React from "react";
import { Button } from "../ui/button";
import { useWishlist } from "@/stores/useWishlistStore";

function NewWishlistButton({ user, className }) {
  const { createWishlist } = useWishlist();

  return (
    <Button
      className={`w-fit ${className}`}
      onClick={() => createWishlist(user)}
    >
      + nouveau
    </Button>
  );
}

export default NewWishlistButton;
