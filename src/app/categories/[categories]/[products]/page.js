"use client";
import { products } from "@/providers/productsProvider";
import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import RatingComponent from "@/components/RatingComponent";
import {
  normalizeString,
  normalizeName,
  normalizeParam,
  average,
} from "@/lib/utils";
import Link from "next/link";
import AvailabilityComponent from "@/components/AvailabilityComponent";
import PriceComponent from "@/components/PriceComponent";
import SelectSortingComponent from "@/components/SelectSortingComponent";
import GridListSwitchButton from "@/components/GridListSwitchButton/GridListSwitchButton";
import BestSellerComponent from "@/components/BestSellerComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import AddToWishListButton from "@/components/AddToWishListButton";
import AddToCartButton from "@/components/AddToCartButton";
import useProductSortStore from "@/stores/useProductsSortStore";
import { Button } from "@/components/ui/button";
import PaginationComponent from "@/components/PaginationComponent";
import SelectNumberToDisplay from "@/components/SelectNumberToDisplay";

export default function Page({ params }) {
  // the page will present items into a grid or a list
  const [isGrid, setIsGrid] = useState(false);
  const { sortOption } = useProductSortStore();
  const [page, setPage] = useState(1);
  const [productDisplayedNumber, setProductDisplayedNumber] = useState(5);

  const productList = products.find((item) => {
    return (
      normalizeParam(params.products) === normalizeString(item.subCategory)
    );
  });

  const paramProducts = normalizeParam(params.products);

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
        sorted.sort((a, b) => average(b.rates) - average(a.rates));
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
        sorted.sort((a, b) => b.rateNbr - a.rateNbr);
        break;
    }
    return sorted;
  }, [productList?.products, sortOption]);

  const toggleGridList = useCallback(() => setIsGrid((prev) => !prev), []);

  const productCount = productList?.products?.length ?? 0;
  const isSingleProduct = productCount === 1;

  const paginationProductList = sortedProducts.filter(
    (product, index) =>
      index < page * productDisplayedNumber &&
      index >= page * productDisplayedNumber - productDisplayedNumber
  );

  const canNext = () => {
    return !(
      paginationProductList[paginationProductList.length - 1].id ===
      sortedProducts[sortedProducts.length - 1].id
    );
  };

  const pageNumber = (value) => {
    let newPage;
    if (value) {
      newPage = Math.ceil(sortedProducts.length / value);
    } else {
      newPage = Math.ceil(sortedProducts.length / productDisplayedNumber);
    }

    if (page > newPage) {
      return page - 1;
    } else {
      return newPage;
    }
  };

  const handleDisplayNumber = (value) => {
    setPage(pageNumber(value));
    setProductDisplayedNumber(value);
  };

  const handlePage = (value) => {
    if (value === "previous" || (value === "next" && value)) {
      setPage((prevPage) =>
        value === "previous" && page > 1
          ? prevPage - 1
          : value === "next" && canNext()
          ? prevPage + 1
          : prevPage
      );
    } else {
      if (value) {
        setPage(value);
      }
    }
  };

  // the breadcrumb will display home then category and subcategory, or category which have not a subcategory
  // if have a sub-category, the category will be clickable and will push to the category, the sub-category will be not
  // if we have no sub-category, the category is not clickable
  return (
    <section className="py-7 px-14">
      <header className="flex flex-col gap-4">
        <div className="lg:flex hidden flex-col w-fit h-1/2 justify-center items-start p-2">
          <BreadcrumbComponent
            hrefLinkList={[
              params.categories !== "products" && {
                display: params.categories,
                link: `categories/${params.categories}`,
              },
            ]}
            unClickableList={[paramProducts]}
          />
        </div>
        <div className="md:gap-6 md:items-end md:flex-row flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-bold capitalize">
            {paramProducts}
          </h2>
          {productCount > 0 && (
            <span className="md:text-2xl md:font-bold md:text-color-dark-gray flex gap-2 text-extreme-dark-gray">
              {productCount}
              <span className="md:hidden">
                {isSingleProduct ? "Produit" : "Produits"}
              </span>
            </span>
          )}
        </div>
        {productCount > 0 && (
          <div className="flex gap-4 pr-7 justify-end">
            <SelectSortingComponent />
            <GridListSwitchButton toggle={toggleGridList} className="size-6" />
          </div>
        )}
      </header>
      <div>
        {paginationProductList.length > 0 ? (
          <>
            <ol
              className={`${
                !isGrid
                  ? "flex flex-col"
                  : "md:grid-cols-4 min-w-80 grid grid-cols-2"
              } gap-4 p-7`}
            >
              {paginationProductList.map((product) => {
                const {
                  name,
                  images,
                  price,
                  rates,
                  availability,
                  isBestSeller,
                  id,
                  alt,
                } = product;

                return (
                  <li className={`${isGrid && "flex flex-col gap-4"}`} key={id}>
                    <div className="xs:flex-row relative flex flex-col min-w-fit gap-4 p-7 bg-background-medium-gray rounded">
                      <Link href={`/product/${id}`}>
                        <Image
                          src={images[0].image}
                          alt={images[0].alt}
                          className={`${!isGrid && "max-w-24 max-h-24"}`}
                        />
                        {isGrid && (
                          <span className="absolute bottom-0 left-0">
                            <BestSellerComponent isBestSeller={isBestSeller} />
                          </span>
                        )}
                      </Link>
                      <div
                        className={`${
                          isGrid && "hidden"
                        } flex flex-col gap-0.5`}
                      >
                        <Link href={`/product/${id}`}>
                          {name}
                          <RatingComponent rateList={rates} />
                          <div className="md:hidden">
                            <BestSellerComponent isBestSeller={isBestSeller} />
                          </div>
                          <AvailabilityComponent availability={availability} />
                          <PriceComponent price={price} />
                        </Link>
                        <div className="flex md:hidden">
                          <AddToCartButton product={product} ml={"ml-0"} />
                          <AddToWishListButton />
                        </div>
                      </div>
                      {!isGrid && (
                        <div className="md:flex hidden flex-col gap-1 ml-auto items-end">
                          <BestSellerComponent isBestSeller={isBestSeller} />
                          <div className="hidden lg:flex">
                            <PriceComponent price={price} />
                          </div>
                          <div className="mt-auto flex items-center">
                            <AddToCartButton product={product} />
                            <AddToWishListButton />
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={`${!isGrid && "hidden"} flex flex-col text-sm`}
                    >
                      <Link href={`/product/${id}`}>
                        {name}
                        <RatingComponent rateList={rates} />
                        <AvailabilityComponent availability={availability} />
                        <PriceComponent price={price} />
                      </Link>
                      <div className="flex">
                        <AddToCartButton product={product} ml={"ml-0"} />
                        <AddToWishListButton />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="flex flex-col gap-2 justify-center items-center">
              <SelectNumberToDisplay
                number={productDisplayedNumber}
                setNumber={handleDisplayNumber}
                maxOptionNumber={sortedProducts.length}
              />

              <PaginationComponent
                currentPage={page}
                pageNumber={pageNumber()}
                handlePage={handlePage}
              />
            </div>
          </>
        ) : (
          <h2 className="md:text-2xl lg:text-3xl flex flex-col gap-10 text-center text-xl font-bold">
            {`Désolé, cette catégorie ne propose pas encore de produits :'( `}
            <Button className="w-fit mx-auto">
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </h2>
        )}
      </div>
    </section>
  );
}
