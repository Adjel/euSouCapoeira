"use client";
import { products } from "@/providers/productsProvider";
import React, { useState, useMemo } from "react";
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

export default function page({ params }) {
  const [gridOrList, setGridOrList] = useState(false);
  const { sortOption } = useProductSortStore();

  const productList = products.find(
    (item) => params.products === normalizeString(item.subCategory)
  );

  const sortedProducts = useMemo(() => {
    const sorted = [...productList.products];
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
  }, [productList.products, sortOption]);

  return (
    <section className="py-7 px-14">
      <header className="flex flex-col gap-4">
        <div className="hidden lg:flex flex-col w-fit h-1/2 justify-center items-start p-2 text-black">
          <BreadcrumbComponent hrefLink={["products", params.products]} />
        </div>
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
          <h2 className="text-4xl md:text-5xl font-bold first-letter:uppercase">
            {params.products}
          </h2>
          <span className="text-extreme-dark-gray md:text-color-dark-gray md:text-2xl md:font-bold">
            {productList.products.length}{" "}
            <span className="md:hidden">
              {productList.products.length === 1 ? "Produit" : "Produits"}
            </span>
          </span>
        </div>
        <section className="flex gap-4 pr-7 justify-end">
          <SelectSortingComponent />
          <GridListSwithButton
            toggle={() => setGridOrList(!gridOrList)}
            className="size-6"
          />
        </section>
      </header>
      <div
        className={`${
          !gridOrList
            ? "flex flex-col"
            : "min-w-80 grid grid-cols-2 md:grid-cols-4"
        } gap-4 p-7`}
      >
        {sortedProducts.map(
          ({
            name,
            image,
            price,
            rate,
            rateNbr,
            avalaibility,
            isBestSeller,
            id,
            alt,
          }) => (
            <div className={`${gridOrList && "flex flex-col gap-4"}`}>
              <Link
                href={id}
                key={id}
                className="relative flex flex-col xs:flex-row min-w-fit gap-4 p-7 bg-background-medium-gray rounded"
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
                  className={`${gridOrList && "hidden"} flex flex-col gap-0.5`}
                >
                  {name}
                  <RatingComponent rate={rate} rateNbr={rateNbr} />
                  <span className="md:hidden">
                    <BestSellerComponent isBestSeller={isBestSeller} />
                  </span>
                  <AvailabilityComponent avalaibility={avalaibility} />
                  <PriceComponent price={price} />
                </div>
                <div className="hidden flex-col gap-1 md:flex ml-auto items-end">
                  {!gridOrList && (
                    <BestSellerComponent isBestSeller={isBestSeller} />
                  )}
                  <span className="hidden lg:flex">
                    <PriceComponent price={price} />
                  </span>
                  <span className="mt-auto flex items-center">
                    <BasketAddButton />
                    <WishAddButton />
                  </span>
                </div>
              </Link>
              <div
                className={`${!gridOrList && "hidden"} flex flex-col text-sm`}
              >
                {name}
                <RatingComponent rate={rate} rateNbr={rateNbr} />
                <AvailabilityComponent avalaibility={avalaibility} />
                <PriceComponent price={price} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
