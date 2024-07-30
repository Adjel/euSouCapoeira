import React from "react";
import Image from "next/image";
import nebasket from "../../../public/nEBasket.svg";
import basketIcon from "../../../public/basket.svg";
import useCartStore from "@/stores/useCartStore";
import Link from "next/link";

function CartButton() {
  const { productQuantity } = useCartStore();

  return (
    <Link href={"/cart"} className="cursor-pointer">
      {productQuantity > 0 ? (
        <>
          <Image
            src={nebasket}
            alt={"l'icône du bouton panier"}
            className="ml-4 w-8 h-8"
          />
          <span
            className={`absolute text-xs top-1 ${
              productQuantity < 10 ? "right-2.5" : "right-1.5"
            }`}
          >
            {productQuantity}
          </span>
        </>
      ) : (
        <Image
          src={basketIcon}
          alt={"l'icône du bouton panier"}
          className="ml-4 w-8 h-8"
        />
      )}
    </Link>
  );
}

export default CartButton;
