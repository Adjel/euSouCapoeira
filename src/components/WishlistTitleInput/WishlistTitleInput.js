import React, { useState } from "react";
import { useWishlist } from "@/stores/useWishlistStore";

function WishlistTitleInput({ user }) {
  const { udpateWishlistName, currentWishlist } = useWishlist();

  const [toggleWishlistName, setToggleWishlistName] = useState(false);
  const [wishlistName, setWishlistName] = useState("");

  const handleSubmitWishlistName = (event) => {
    event.preventDefault();

    if (wishlistName === "") {
      setWishlistName((prevSate) => prevSate);
      setToggleWishlistName(false);
      return;
    }

    udpateWishlistName(user, wishlistName);
    setToggleWishlistName(false);
    setWishlistName("");
  };

  const handleWishlistName = (event) => {
    setWishlistName(event.target.value);
  };

  const handleToggleWishlistName = () => {
    setToggleWishlistName((prev) => !prev);
  };

  return toggleWishlistName ? (
    <form
      onSubmit={(event) => handleSubmitWishlistName(event)}
      className="w-full"
    >
      <input
        className="w-full text-3xl font-bold first-letter:uppercase"
        type="text"
        placeholder={currentWishlist.name}
        value={wishlistName}
        onChange={(event) => handleWishlistName(event)}
      ></input>
    </form>
  ) : (
    <h2
      className="text-3xl font-bold first-letter:uppercase"
      onClick={handleToggleWishlistName}
    >
      {currentWishlist.name}
    </h2>
  );
}

export default WishlistTitleInput;
