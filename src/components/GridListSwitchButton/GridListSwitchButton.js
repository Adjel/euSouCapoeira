"use client";
import React, { useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";

function GridListSwithButton({ toggle }) {
  const [gridOrList, setGridOrList] = useState(false);

  function handleSwitch() {
    toggle();
    setGridOrList(!gridOrList);
  }

  return (
    <button onClick={handleSwitch}>
      {!gridOrList ? (
        <HiOutlineSquares2X2 className="size-6" />
      ) : (
        <TfiMenuAlt className="size-6" />
      )}
    </button>
  );
}

export default GridListSwithButton;
