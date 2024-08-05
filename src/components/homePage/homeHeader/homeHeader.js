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
import styles from "./homeHeader.module.css";

function HomeHeader() {
  return (
    <>
      <div className="py-4 overflow-hidden">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {adds.map(({ alt, image }, index) => (
              <CarouselItem className="basis-4/6" key={index}>
                <div className={styles.imageWrapperStyle}>
                  <Image
                    className="rounded"
                    src={image}
                    alt={alt}
                    style={{
                      layout: "fill",
                      objectFit: "cover",
                      objectPosition: "50% 20%",
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={`left-12 ${styles.buttonStyle}`} />
          <CarouselNext className={`right-12 ${styles.buttonStyle}`} />
        </Carousel>
      </div>
    </>
  );
}

export default HomeHeader;
