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
import Categories from "@/components/Categories/Categories";
import RecommandsComponent from "@/components/RecommandsComponent";
import { products as recommendedProducts } from "@/providers/RecomandsProvider";

function HomeHeader() {
  function Item({ src }) {
    return (
      <CarouselItem className="basis-4/6">
        <div className={styles.imageWrapperStyle}>
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
    <>
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
          <CarouselPrevious className={`left-12 ${styles.buttonStyle}`} />
          <CarouselNext className={`right-12 ${styles.buttonStyle}`} />
        </Carousel>
        <Categories />
        <RecommandsComponent
          title="produit phares"
          products={recommendedProducts}
        />
      </div>
    </>
  );
}

export default HomeHeader;
