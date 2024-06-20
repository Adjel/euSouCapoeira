import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function homeHeader() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">CAROU 1</CarouselItem>
          <CarouselItem className="basis-1/3">CAROU 1</CarouselItem>
          <CarouselItem className="basis-1/3">CAROU 3</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default homeHeader;
