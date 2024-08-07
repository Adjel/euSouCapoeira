import React from "react";
import { SlHeart } from "react-icons/sl";
import Link from "next/link";

function WishListButton({ className }) {
  return (
    <Link href={"/wishList"}>
      <SlHeart className={`${className} cursor-pointer`} />
    </Link>
  );
}

export default WishListButton;
