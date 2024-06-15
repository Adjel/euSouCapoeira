import React from "react";
import { SlBasket } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

function UserButtonsComponent() {
  return (
    <div className="basics flex">
      <RxAvatar />
      <SlBasket />
      <FaRegCircle />
      <FaRegHeart />
    </div>
  );
}

export default UserButtonsComponent;
