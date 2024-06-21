import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { adds } from "@/providers/addImagesProvider";

function HomeHeader() {
  const imageWrapperStyle =
    "relative w-full h-36 md:h-48 lg:h-64 overflow-hidden";

  const buttonStyle = "bg-color-gold hidden lg:flex";

  function Item({ src }) {
    return (
      <CarouselItem className="basis-4/6">
        <div className={imageWrapperStyle}>
          <Image
            className="rounded"
            src={src}
            alt="an add"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 20%"
          />
        </div>
      </CarouselItem>
    );
  }

  return (
    <div className="py-4 overflow-hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {adds.map(({ alt, image }) => (
            <Item src={image} alt={alt} />
          ))}
        </CarouselContent>
        <CarouselPrevious className={`left-12 ${buttonStyle}`} />
        <CarouselNext className={`right-12 ${buttonStyle}`} />
      </Carousel>
    </div>
  );
}

export default HomeHeader;
