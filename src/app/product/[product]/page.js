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
import CommentsComponent from "@/components/CommentsComponent";
import "@/styles/globals.css";
import useCartStore from "@/stores/useCartStore";

export default function page({ params }) {
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProduct(getMockedProductById(params.product));
  }, [params]);

  const handleQuantity = (productId, plus) => {
    setQuantity((prevQuantity) =>
      plus ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  return (
    <section className="basicPadding py-7">
      <div className="flex flex-col lg:flex-row">
        <section className="flex flex-col border-2 border-pink-500">
          <header>
            {product?.name}
            <RatingComponent rate={product?.rate} rateNbr={product?.rateNbr} />
          </header>
          <Image
            src={product?.photos[photoIndex ?? 0].photo}
            alt={product?.alt}
            className="mx-auto w-48 md:w-80 h-auto"
          />
          <div className="flex flex-wrap gap-4 justify-start items-center bg-background-medium-gray">
            {product?.photos.map(({ photo, alt }, index) => (
              <div
                className={`${
                  index === photoIndex &&
                  "px-5 py-3 border-t-2 border-color-gold bg-color-hover-cancel-button rounded"
                } `}
              >
                <Image
                  key={index}
                  src={photo}
                  alt={alt}
                  onClick={() => setPhotoIndex(index)}
                  className="mx-auto w-12 md:w-20 h-auto"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="border-2 border-blue-400">
          <div className="py-1">
            <PriceComponent price={product?.price} />
            <AvailabilityComponent availability={product?.availability} />
          </div>
          <div className="flex py-3 gap-4 border-2 border-green-400">
            <ProductQuantityButton
              quantity={quantity}
              productId={product?.id}
              onClick={handleQuantity}
            />
            <Button
              className="w-full"
              onClick={() => addToCart(product, quantity)}
            >
              Ajouter au panier
            </Button>
          </div>
        </section>
      </div>
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
