"use client";
import React from "react";
import CategoryItem from "@/components/Categories/CategoryItem";
import { categories } from "@/providers/categoriesProvider";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
  const normalizeString = (str) => {
    return str
      .normalize("NFD") // Normalize to decomposed form
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
      .replace(/s$/, ""); // Remove trailing 's' if present
  };
  const normalizedCategory = normalizeString(params.category.toLowerCase());

  const category = categories.find(
    (cat) => normalizeString(cat.title.toLowerCase()) === normalizedCategory
  );

  if (category.subCategories.length < 1) {
    router.push(`/product/${category}`);
  } else {
    return (
      <section className="flex flex-col md:grid-cols-4 lg:grid-cols-5">
        <div className="basicPadding flex-col mt-10 mb-16">
          <h2 className="h2title">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.subCategories.map(({ name, image, alt }) => (
              <div className="flex">
                <CategoryItem title={name} image={image} alt={alt} />
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
