"use client";
import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";

function MenuButton({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClicked() {
    setIsOpen(!isOpen);
    onClick(isOpen);
  }

  return (
    <>
      <CgMenu onClick={onClicked} className="size-7 sm:size-6" />
    </>
  );
}

export default MenuButton;
