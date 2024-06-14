import React from "react";
import { SlBasket } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";

function UserButtonsComponent() {
  return (
    <div>
      <RxAvatar />
      <SlBasket />
      <FaRegCircle />
      <HiMenu />
      <FaRegHeart />
    </div>
  );
}

export default UserButtonsComponent;
