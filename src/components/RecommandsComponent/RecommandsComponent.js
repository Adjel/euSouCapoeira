import React from "react";
import ProductPreview from "../ProductPreview";
import { products as adsProducts } from "../../providers/RecomandsProvider";

function RecommandsComponent({ title, products = adsProducts }) {
  return (
    products &&
    products?.length > 0 && (
      <div className="flex flex-col items-center px-2 mb-16">
        <h2 className="h2title text-center">{title}</h2>
        <ProductPreview products={products} />
      </div>
    )
  );
}

export default RecommandsComponent;
