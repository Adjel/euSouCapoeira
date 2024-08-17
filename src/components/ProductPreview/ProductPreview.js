"use client";
import React, { useState } from "react";
import ProductPreviewItem from "./ProductPreviewItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

function ProductPreview({ products }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = `hidden ${
    isHovered ? "bg-color-gold lg:group-hover:flex" : "hidden"
  }`;

  return (
    <div
      className="flex items-center p-2 pr-3 group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {console.log(products)}
          {products?.map(({ image, alt, name, price, rate, rateNbr, id }) => (
            <CarouselItem
              key={id}
              alt={alt}
              className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 border-1 border-color-text-medium-gray"
            >
              <ProductPreviewItem
                key={id}
                productName={name}
                image={image}
                alt={alt}
                price={price}
                productId={id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`left-12 ${buttonStyle}`} />
        <CarouselNext
          className={`right-12 
            ${buttonStyle}`}
        />
      </Carousel>
    </div>
  );
}

export default ProductPreview;
