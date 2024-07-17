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
import ShareProductButton from "@/components/ShareProductButton";
import AddToWishListButton from "@/components/AddToWishListButton";
import Link from "next/link";
import CheckedIcon from "@/components/CheckedIcon";
import BreadCrumbComponent from "@/components/BreadcrumbComponent/BreadcrumbComponent";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function page({ params }) {
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isPhotoBarExpanded, setIsPhotoBarExpanded] = useState(false);

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
        <section className="flex flex-col ">
          <header>
            <div className="mb-7">
              <BreadCrumbComponent
                hrefLinkList={[`${params.categories}`]}
                unClickableList={[`${product?.name}`]}
              />
            </div>
            {product?.name}
            <RatingComponent rateList={product?.rates} />
          </header>
          <Image
            src={product?.photos[photoIndex ?? 0].photo}
            alt={product?.alt}
            className="mx-auto w-48 md:w-80 h-auto"
          />

          <div
            className={`flex flex-wrap gap-4 px-2 overflow-hidden ${
              !isPhotoBarExpanded
                ? "max-h-20 md:max-h-32"
                : "max-h-40 md:max-h-64"
            } justify-start items-center bg-background-medium-gray height-transition transition-all duration-500 ease-in-out
            `}
          >
            <button
              className="flex flex-col justify-center items-center w-14 h-14 shadow-md rounded-full text-6xl bg-white"
              onClick={() => setIsPhotoBarExpanded(!isPhotoBarExpanded)}
            >
              <span className=" text-color-gold">
                {isPhotoBarExpanded ? (
                  <IoCloseOutline className="size-9" />
                ) : (
                  <IoCloseOutline className="size-9 rotate-45" />
                )}
              </span>
            </button>
            {product?.photos.map(({ photo, alt }, index) => (
              <div
                className={`${
                  index === photoIndex &&
                  "px-5 py-4 border-t-2 border-color-gold bg-color-hover-cancel-button rounded"
                } `}
              >
                <Image
                  className="mx-auto w-16 md:w-24 h-auto cursor-pointer"
                  key={index}
                  src={photo}
                  alt={alt}
                  onClick={() => setPhotoIndex(index)}
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-2 mt-4 justify-center ">
            <div className="hidden lg:flex mb-7" />
            <div className="text-base md:text-lg font-semibold">
              Variations de ce produit
            </div>
            <div className="flex flex-wrap justify-start">
              {product?.variants.map(({ alt, photo, id }, index) => (
                <Link
                  href={`/product/${id}`}
                  className="relative hover:text-color-gold"
                >
                  <Image
                    key={id}
                    className={`${
                      index === product?.variants.length - 1
                        ? "border"
                        : "border border-r-0 hover:border-r"
                    } w-16 h-16 p-4 border-color-hover-cancel-button hover:border-color-gold cursor-pointer `}
                    src={photo}
                    alt={alt}
                  />
                  {id === product?.id && <CheckedIcon />}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-1">
            <PriceComponent price={product?.price} />
            <AvailabilityComponent availability={product?.availability} />
          </div>
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
          <div className="flex flex-row justify-evenly">
            <AddToWishListButton product={product} />
            <ShareProductButton params={params} />
          </div>
        </section>
      </div>
      <section>
        <ul className="flex flex-col gap-2 mt-4 text-base ">
          <header>
            <h2 className="text-xl font-bold">{product?.name}</h2>
          </header>
          {product?.specs.map((item, index) => (
            <il
              key={index}
              className="flex flex-row gap-1 justify-start items-center"
            >
              <span className="w-2 h-2 border-2 border-black rounded-full"></span>
              <div className="lowercase first-letter:uppercase">{item}</div>
            </il>
          ))}
        </ul>
      </section>
      <section>
        <CommentsComponent
          comments={product?.comments}
          rates={product?.rates}
        />
      </section>
      <RecommandsComponent />
    </section>
  );
}
