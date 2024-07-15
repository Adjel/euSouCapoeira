"use client";
import React, { useEffect, useState } from "react";
import { getMockedProductById } from "@/providers/productProvider";
import Image from "next/image";
import PriceComponent from "@/components/PriceComponent";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import ProductQuantityButton from "@/components/ProductQuantityButton";
import { Button } from "@/components/ui/button";
import RecommandsComponent from "@/components/RecommandsComponent";
import RatingComponent from "@/components/RatingComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import CommentsComponent from "@/components/CommentsComponent";
import "@/styles/globals.css";

export default function page({ params }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(getMockedProductById(params.product));
  }, [params]);

  return (
    <section>
      <section className="border-2 border-pink-500">
        <header>{product?.name}</header>
        <Image src={product?.image} width={25} height={25} />
        <div className="border-2 border-green-300">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {product?.variantPhotos?.map(({ alt, src }) => (
                <CarouselItem className="basis-4/6">
                  <div className={styles.imageWrapperStyle}>
                    <Image
                      className="rounded"
                      src={src}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 20%"
                      width={25}
                      height={25}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={`left-12 buttonStyle}`} />
            <CarouselNext className={`right-12 buttonStyle}`} />
          </Carousel>
        </div>
      </section>
      <section className="border-2 border-blue-400">
        <div>
          <PriceComponent price={product?.price} />
          <AvailabilityComponent availability={product?.availability} />
        </div>
        <div className="flex border-2 border-green-400">
          <ProductQuantityButton />
          <Button>Ajouter au panier</Button>
        </div>
      </section>
      <section className="border-2 border-yellow-300">
        <div className="border-2 border-blue-600">Variations de ce produit</div>
        <ul className="border-2 border-violet-500">
          CARACT2RISTIQUES DU PRODUIT
        </ul>
      </section>
      <RecommandsComponent />
      <section className="border-2 border-green-500">
        <header>
          <h2>{`${product?.rateNbr} Evaluations de clients`}</h2>
        </header>
        <RatingComponent rate={product?.rate} rateNbr={product?.rateNbr} />
        <CommentsComponent comment={product?.comments} />
      </section>
    </section>
  );
}
