"use client";
import React from "react";
import CategoryItem from "@/components/Categories/CategoryItem";
import { categories } from "@/providers/categoriesProvider";
import { useRouter } from "next/navigation";
import { normalizeString } from "@/lib/utils";
import Image from "next/image";
import berimbau from "../../../public/backgrounds/berimbau.png";
import "@/styles/globals.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Page = ({ params }) => {
  const router = useRouter();

  const normalizedCategory = normalizeString(params.categories);

  const category = categories.find(
    (cat) => normalizeString(cat.title) === normalizedCategory
  );

  if (category && category.subCategories.length < 1) {
    router.push(`${category}/${category}`);
  } else {
    return (
      <section className="relative flex flex-col md:grid-cols-4 lg:grid-cols-5">
        <header className="flex flex-col justify-center lg:justify-start items-start h-24 md:h-36 lg:h-56">
          <Image
            src={berimbau}
            style={{ objectFit: "cover" }}
            className="absolute z-0 top-0 w-full h-24 md:h-36 lg:h-56"
          />
          <div className="hidden lg:flex flex-col h-1/2 justify-center items-start z-0 top-0 w-fit ml-6 md:ml-10 lg:ml-12 text-white">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">accueil</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${params.categories}`}>
                    {params.categories}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h2 className="z-0 top-0 ml-6 md:ml-10 lg:ml-12 text-xl md:text-2xl lg:text-4xl font-bold first-letter:uppercase text-white ">
            {category.title}
          </h2>
        </header>
        <div className="basicPadding flex-col mt-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.subCategories.map(({ name, image, alt }) => (
              <div className="flex">
                <CategoryItem
                  title={name}
                  image={image}
                  alt={alt}
                  isVertical={true}
                />
                <div className="h-0.1 bg-color-divider" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Page;
