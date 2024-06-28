"use client";
import React, { useState } from "react";
import { fakePartners } from "@/providers/PartnersProvider";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function PartenersComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = `hidden ${
    isHovered ? "bg-color-gold lg:group-hover:flex" : "hidden"
  }`;

  return (
    <div
      className="basicPadding flex flex-col w-full h-auto items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        orientation="vertical"
        className="block md:hidden basis-1/3 overflow-hidden w-full"
      >
        <CarouselContent>
          {fakePartners.map(({ image, alt }) => (
            <CarouselItem key={alt} className="w-full">
              <div className="relative w-full h-48 md:h-64 lg:h-72">
                <Image
                  src={image}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                  objectPosition="0% 0%"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={{
          align: "center",
          loop: false,
        }}
        className="hidden md:block w-full group"
      >
        <CarouselContent className="flex justify-center">
          {fakePartners.map(({ image, alt }) => (
            <CarouselItem key={alt} className="basis-1/3">
              <div className="relative w-full h-36 md:h-48 lg:h-64 overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  objectFit="cover"
                  className="rounded"
                  objectPosition="0% 0%"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`${buttonStyle} start-12`} />
        <CarouselNext className={`${buttonStyle} end-12`} />
      </Carousel>
    </div>
  );
}

export default PartenersComponent;
