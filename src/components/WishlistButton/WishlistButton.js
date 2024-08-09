import React from "react";
import { SlHeart } from "react-icons/sl";
import Link from "next/link";

function WishlistButton({ className }) {
  return (
    <Link href={"/wishlist"}>
      <SlHeart className={`${className} cursor-pointer`} />
    </Link>
  );
}

export default WishlistButton;
