"use client";
import React from "react";
import { CgMenu } from "react-icons/cg";
import { useMobileNavStore } from "@/stores/useNavStore";
import "@/styles/globals.css";

function MenuButton() {
  const { toggle } = useMobileNavStore();

  return (
    <>
      <CgMenu onClick={toggle} className="size-7 sm:size-6 cursor-pointer" />
    </>
  );
}

export default MenuButton;
