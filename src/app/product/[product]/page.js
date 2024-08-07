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
import useCartStore from "@/stores/useCartStore";
import AddToWishListButton from "@/components/AddToWishListButton";
import BreadCrumbComponent from "@/components/BreadcrumbComponent/BreadcrumbComponent";
import { IoCloseOutline } from "react-icons/io5";
import ZoomImage from "@/components/ZoomOnImage/ZoomOnImage";
import ProductVariantsComponent from "@/components/ProductVariantsComponent";
import { useRouter } from "next/navigation";
import icon from "../../../../public/icon.svg";
import "@/styles/globals.css";

export default function page({ params }) {
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isImageBarExpanded, setIsImageBarExpanded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const product = getMockedProductById(params.product);
    if (product) {
      setProduct(product);
    } else {
      router.push("/not-found");
    }
  }, [params]);

  const handleQuantity = (plus) => {
    setQuantity((prevQuantity) =>
      plus ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  if (!product) {
    return (
      <section className="basicPadding py-7">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              alt="une photo d'un berimbau représentant une lettre C"
              src={icon}
              className="animate-spin h-32 w-32 my-32 text-color-gold "
            />
            <span className="text-lg uppercase">Chargement en cours...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="basicPadding py-7">
      <div className="flex flex-col lg:flex-row">
        <section className="flex flex-col lg:w-2/3">
          <header>
            <div className="mb-7">
              <BreadCrumbComponent
                hrefLinkList={[{ display: params.categories }]}
                unClickableList={[`${product?.name}`]}
              />
            </div>
            <h2 className="text-2xl md:text-3xl">{product?.name}</h2>
            <RatingComponent rateList={product?.rates} />
          </header>
          <ZoomImage
            src={product?.images[imageIndex ?? 0].image}
            alt={product?.images[imageIndex ?? 0].alt}
            classN="mx-auto w-48 md:w-80 h-auto"
          />

          <ul
            className={`flex flex-wrap gap-4 px-2 overflow-hidden ${
              !isImageBarExpanded
                ? "max-h-24 md:max-h-32"
                : "max-h-40 md:max-h-64"
            } justify-start items-center bg-background-medium-gray height-transition transition-all duration-500 ease-in-out
            `}
          >
            {product?.images.length > 5 && (
              <button
                className="flex flex-col justify-center items-center w-14 h-14 shadow-md rounded-full text-6xl bg-white"
                onClick={() => setIsImageBarExpanded(!isImageBarExpanded)}
              >
                <div className="text-color-gold">
                  {isImageBarExpanded ? (
                    <IoCloseOutline className="size-9" />
                  ) : (
                    <IoCloseOutline className="size-9 rotate-45" />
                  )}
                </div>
              </button>
            )}

            {product?.images.map(({ image, alt }, index) => (
              <li
                key={index}
                className={`${
                  index === imageIndex &&
                  "px-5 py-4 border-t-2 border-color-gold bg-color-hover-cancel-button rounded"
                } `}
              >
                <Image
                  className="mx-auto w-16 md:w-24 h-auto cursor-pointer"
                  key={index}
                  src={image}
                  alt={alt}
                  onClick={() => setImageIndex(index)}
                />
              </li>
            ))}
          </ul>
        </section>
        <section>
          {product?.variants.length > 0 ? (
            <ProductVariantsComponent product={product} />
          ) : (
            <div className="hidden lg:flex mb-11" />
          )}
          <div className="py-1">
            <PriceComponent price={product?.price} />
            <AvailabilityComponent availability={product?.availability} />
          </div>
          {product?.availability !== "nostock" && (
            <div className="flex py-3 gap-4">
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
          )}
          <div className="flex gap-2 justify-center lg:justify-start">
            <AddToWishListButton product={product} ml="ml-0" />
            <span>Sauvegarder</span>
          </div>
        </section>
      </div>
      <section>
        <ul className="flex flex-col gap-2 mt-4 text-base ">
          <header>
            <h2 className="text-xl font-bold">{product?.name}</h2>
          </header>
          {product?.specs.map((item, index) => (
            <li
              key={index}
              className="flex flex-row gap-1 justify-start items-center"
            >
              <span className="w-2 h-2 border-2 border-black rounded-full"></span>
              <div className="lowercase first-letter:uppercase">{item}</div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <CommentsComponent
          comments={product?.comments}
          rates={product?.rates}
        />
      </section>
      <RecommandsComponent />
    </section>
  );
}
