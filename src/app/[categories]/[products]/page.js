"use client";
import { products } from "@/providers/productsProvider";
import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import RatingComponent from "@/components/RatingComponent";
import { normalizeString, normalizeName } from "@/lib/utils";
import Link from "next/link";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import SelectSortingComponent from "@/components/SelectSortingComponent";
import GridListSwithButton from "@/components/GridListSwitchButton/GridListSwitchButton";
import BestSellerComponent from "@/components/BestSellerComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import WishAddButton from "@/components/WishAddButton";
import BasketAddButton from "@/components/BasketAddButton";
import useProductSortStore from "@/stores/useProductsSortStore";
import { Button } from "@/components/ui/button";

export default function page({ params }) {
  const [gridOrList, setGridOrList] = useState(false);
  const { sortOption } = useProductSortStore();

  const productList = products.find(
    (item) => params.products === normalizeString(item.subCategory)
  );

  const sortedProducts = useMemo(() => {
    const sorted = [...(productList?.products ?? [])];
    switch (sortOption) {
      case "Prix: - cher au + cher":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "Prix: + cher au - cher":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "Nouveaux produits":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Meilleur évaluation":
        sorted.sort((a, b) => b.rate - a.rate);
        break;
      case "Alphabétique A - Z":
        sorted.sort((a, b) =>
          normalizeName(a.name).localeCompare(normalizeName(b.name))
        );
        break;
      case "Alphabétique Z - A":
        sorted.sort((a, b) =>
          normalizeName(b.name).localeCompare(normalizeName(a.name))
        );
        break;
      default:
        // TODO: popularity may be best sells / days for the week or/&& month ect
        // Popularité - Sort by the number of ratings
        sorted.sort((a, b) => b.rateNbr - a.rateNbr);
        break;
    }
    return sorted;
  }, [productList?.products, sortOption]);

  const toggleGridList = useCallback(() => setGridOrList((prev) => !prev), []);

  const productCount = productList?.products?.length ?? 0;
  const isSingleProduct = productCount === 1;

  return (
    <section className="py-7 px-14">
      <header className="flex flex-col gap-4">
        <div className="lg:flex hidden flex-col w-fit h-1/2 justify-center items-start p-2">
          <BreadcrumbComponent
            hrefLink={[params.categories, params.products]}
          />
        </div>
        <div className="md:gap-6 md:items-end md:flex-row flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-bold first-letter:uppercase">
            {params.products}
          </h2>
          <span className="md:text-2xl md:font-bold md:text-color-dark-gray flex gap-2 text-extreme-dark-gray">
            {productCount}
            <span className="md:hidden">
              {isSingleProduct ? "Produit" : "Produits"}
            </span>
          </span>
        </div>
        <section className="flex gap-4 pr-7 justify-end">
          <SelectSortingComponent />
          <GridListSwithButton toggle={toggleGridList} className="size-6" />
        </section>
      </header>
      <div
        className={`${
          !gridOrList
            ? "flex flex-col"
            : "md:grid-cols-4 min-w-80 grid grid-cols-2 "
        } gap-4 p-7`}
      >
        {sortedProducts.length > 0 ? (
          sortedProducts.map(
            ({
              name,
              image,
              price,
              rate,
              rateNbr,
              availability,
              isBestSeller,
              id,
              alt,
            }) => (
              <div
                className={`${gridOrList && "flex flex-col gap-4"}`}
                key={id}
              >
                <Link
                  href={id}
                  className="xs:flex-row relative flex flex-col min-w-fit gap-4 p-7 bg-background-medium-gray rounded"
                >
                  <Image
                    src={image}
                    alt={alt}
                    className={`${!gridOrList && "max-w-24 max-h-24"}`}
                  />
                  {gridOrList && (
                    <span className="absolute bottom-0 left-0">
                      <BestSellerComponent isBestSeller={isBestSeller} />
                    </span>
                  )}
                  <div
                    className={`${
                      gridOrList && "hidden"
                    } flex flex-col gap-0.5`}
                  >
                    {name}
                    <RatingComponent rate={rate} rateNbr={rateNbr} />
                    <span className="md:hidden">
                      <BestSellerComponent isBestSeller={isBestSeller} />
                    </span>
                    <AvailabilityComponent availability={availability} />
                    <PriceComponent price={price} />
                  </div>
                  {!gridOrList && (
                    <div className="md:flex hidden flex-col gap-1 ml-auto items-end">
                      <BestSellerComponent isBestSeller={isBestSeller} />

                      <span className="hidden lg:flex">
                        <PriceComponent price={price} />
                      </span>
                      <span className="mt-auto flex items-center">
                        <BasketAddButton />
                        <WishAddButton />
                      </span>
                    </div>
                  )}
                </Link>
                <div
                  className={`${!gridOrList && "hidden"} flex flex-col text-sm`}
                >
                  {name}
                  <RatingComponent rate={rate} rateNbr={rateNbr} />
                  <AvailabilityComponent availability={availability} />
                  <PriceComponent price={price} />
                </div>
              </div>
            )
          )
        ) : (
          <h2 className="md:text-2xl lg:text:3xl flex flex-col gap-10 text-center text-xl font-bold">
            {`Désolé, cette catégorie ne propose pas encore de produits :'( `}
            <Button className="w-fit mx-auto">
              <Link href="/">Retour à l'acceuil</Link>
            </Button>
          </h2>
        )}
      </div>
    </section>
  );
}
