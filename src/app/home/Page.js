import React from "react";
import HomeHeader from "@/components/homePage/HomeHeader";
import Categories from "@/components/Categories/Categories";
import RecommandsComponent from "@/components/RecommandsComponent";
import {
  products as recommendedProducts,
  newProducts,
} from "@/providers/RecomandsProvider";
import PartenersComponent from "@/components/PartenersComponent";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Categories />
      <RecommandsComponent
        title="produit phares"
        products={recommendedProducts}
      />
      <RecommandsComponent title="nouveaux produits" products={newProducts} />
      <PartenersComponent />
    </div>
  );
}
