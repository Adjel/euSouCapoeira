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
import "@/styles/globals.css";
import LoadingComponent from "@/components/LoadingComponent";

export default function Page({ params }) {
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isImageBarExpanded, setIsImageBarExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getMockedProductById(params.product);
        if (product) {
          setProduct(product);
        } else {
          router.push("/not-found");
        }
      } catch (e) {
        return null;
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [params]);

  const handleQuantity = (plus) => {
    setQuantity((prevQuantity) =>
      plus ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  return isLoading || !product ? (
    <LoadingComponent
      sentence="chargement du produit..."
      imagePriority={true}
    />
  ) : (
    <section className="basicPadding py-7">
      <div className="hidden lg:block mb-7">
        <BreadCrumbComponent
          hrefLinkList={[
            {
              display: params.categories,
              link: `categories/${params.categories}`,
            },
            {
              display: params.products,
              link: `categories/${params.categories}/${params.products}`,
            },
          ]}
          unClickableList={[`${product?.name}`]}
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <section className="flex flex-col lg:w-2/3">
          <header>
            <h2 className="text-2xl md:text-3xl">{product?.name}</h2>
          </header>
          <RatingComponent productId={product?.id} />
          <ZoomImage
            src={product?.images[imageIndex ?? 0].image}
            alt={product?.images[imageIndex ?? 0].alt}
            customClassName="mx-auto w-48 md:w-80 h-auto"
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
                  priority={true}
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
            <ProductVariantsComponent product={product} imagePriority={true} />
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
            <AddToWishListButton product={product.id} ml="ml-0" />
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
        <CommentsComponent productId={product.id} />
      </section>
      <RecommandsComponent />
    </section>
  );
}
