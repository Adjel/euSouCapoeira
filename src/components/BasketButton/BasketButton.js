"use client";
import React, { useState } from "react";
import Image from "next/image";
import nebasket from "../../../public/nEBasket.svg";
import basketIcon from "../../../public/basket.svg";

function BasketButton() {
  const [basket, setBasket] = useState([]);

  return (
    <div className="cursor-pointer">
      {basket.length > 0 ? (
        <>
          <Image src={nebasket} className="ml-4 w-8 h-8" />
          <span
            className={`absolute text-xs top-1.5 ${
              basket.length < 10 ? "right-2.5" : "right-1.5"
            }`}
          >
            {basket.length}
          </span>
        </>
      ) : (
        <Image src={basketIcon} className="ml-4 w-8 h-8" />
      )}
    </div>
  );
}

export default BasketButton;
