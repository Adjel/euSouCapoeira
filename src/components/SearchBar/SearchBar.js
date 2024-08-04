"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { products } from "@/providers/productsProvider";
import Image from "next/image";
import Link from "next/link";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [productList, setProductList] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    const foundProductList = products.flatMap((subCtaegory) =>
      subCtaegory.products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setProductList(foundProductList);
  };

  const handleProductClicked = () => {
    setProductList([]);
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full h-7 mx-0 px-4 bg-white rounded outline-color-gold focus-within:outline"
      >
        <GoSearch className="size-6 fill-color-dark-gray" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="flex-1 text-center focus:outline-none"
          placeholder="Rechercher"
        />
      </form>
      {query !== "" && query.length > 0 && productList.length > 0 && (
        <ul className="flex flex-col gap-5 p-3 w-full md:w-96 absolute z-50 top-8 left-0 right-0 bg-white border rounded-xl">
          {productList.map(({ id, name, images, price }) => (
            <li key={id}>
              <Link
                href={`/product/${id}`}
                className="flex gap-3"
                onClick={handleProductClicked}
              >
                <Image src={images[0].image} className="w-16 h-16" />
                <div className="flex flex-col">
                  <strong className="text-xs md:text-sm">{name}</strong>
                  <span className="text-sx md:text-sm">{price} €</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
