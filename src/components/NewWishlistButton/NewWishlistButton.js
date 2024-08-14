import React from "react";
import { Button } from "../ui/button";

function NewWishlistButton({ className }) {
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
