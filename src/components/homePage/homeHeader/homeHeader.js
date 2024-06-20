import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import fake1 from "../../../../public/fakeApi/fakeAdd.jpg";
import fake2 from "../../../../public/fakeApi/bateria.webp";
import fake3 from "../../../../public/fakeApi/fake3.webp";
import capo from "../../../../public/fakeApi/capo.jpg";
import event from "../../../../public/fakeApi/event.jpg";

function HomeHeader() {
  const imageWrapperStyle =
    "relative w-full h-36 md:h-48 lg:h-64 overflow-hidden";

  const buttonStyle = "bg-black hidden lg:flex";

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
      <Carousel>
        <CarouselContent>
          <Item src={fake1} />
          <Item src={fake3} />
          <Item src={fake2} />
          <Item src={capo} />
          <Item src={event} />
        </CarouselContent>
        <CarouselPrevious className={`left-12 ${buttonStyle}`} />
        <CarouselNext className={`right-12 ${buttonStyle}`} />
      </Carousel>
    </div>
  );
}

export default HomeHeader;
