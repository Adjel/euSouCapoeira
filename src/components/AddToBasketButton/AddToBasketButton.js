import React from "react";
import Image from "next/image";
import nebasket from "../../../public/nEBasket.svg";
import basketIcon from "../../../public/basket.svg";
import Link from "next/link";
import useCartStore from "@/stores/useCartStore";

function AddToBasketButton() {
  const { productQuantity } = useCartStore();

  return (
    <Link href={"/basket"} className="cursor-pointer">
      {productQuantity > 0 ? (
        <>
          <Image src={nebasket} className="ml-4 w-8 h-8" />
          <span
            className={`absolute text-xs top-1 ${
              productQuantity < 10 ? "right-2.5" : "right-1.5"
            }`}
          >
            {productQuantity}
          </span>
        </>
      ) : (
        <Image src={basketIcon} className="ml-4 w-8 h-8" />
      )}
    </Link>
  );
}

export default AddToBasketButton;
