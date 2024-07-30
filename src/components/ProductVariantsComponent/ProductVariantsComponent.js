import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckedIcon from "../CheckedIcon";

function ProductVariantsComponent({ product }) {
  const sortedVariants = product.variants.sort((a, b) => a.id - b.id);
  return (
    <div className="flex flex-col gap-2 mt-4 justify-center ">
      <div className="hidden lg:flex mb-7" />
      <div className="text-base md:text-lg font-semibold">
        Variations de ce produit
      </div>
      <ol className="flex flex-wrap justify-start">
        {sortedVariants.map(({ alt, image, id }, index) => (
          <il key={id}>
            <Link
              href={`/product/${id}`}
              className="relative hover:text-color-gold"
            >
              <Image
                className={`${
                  index === product?.variants.length - 1
                    ? "border"
                    : "border border-r-0 hover:border-r"
                } w-16 h-16 p-4 border-color-hover-cancel-button hover:border-color-gold cursor-pointer `}
                src={image}
                alt={alt}
              />
              {product.id === id && <CheckedIcon />}
            </Link>
          </il>
        ))}
      </ol>
    </div>
  );
}

export default ProductVariantsComponent;
