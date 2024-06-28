import { categories } from "@/providers/categoriesProvider";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <div className="basicPadding flex-col mt-10 mb-16">
      <h2 className="h2title">Nos Catégories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(({ title, image, alt }) => (
          <div className="felx">
            <CategoryItem title={title} image={image} alt={alt} />
            <div className="h-0.1 bg-color-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}
