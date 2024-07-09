"use client";
import React from "react";
import CategoryItem from "@/components/Categories/CategoryItem";
import { categories } from "@/providers/categoriesProvider";
import { useRouter } from "next/navigation";
import { normalizeString } from "@/lib/utils";

const Page = ({ params }) => {
  const router = useRouter();

  const normalizedCategory = normalizeString(params.category);

  const category = categories.find(
    (cat) => normalizeString(cat.title.toLowerCase()) === normalizedCategory
  );

  console.log({ category });

  if (category && category.subCategories.length < 1) {
    router.push(`${category}/${category}`);
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
