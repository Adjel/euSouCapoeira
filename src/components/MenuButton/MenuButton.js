"use client";
import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";

function MenuButton({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClicked() {
    setIsOpen(!isOpen);
    onClick(isOpen);
    console.log({ isOpen });
  }

  return (
    <>
      <CgMenu onClick={onClicked} className="size-7" />
    </>
  );
}

export default MenuButton;
