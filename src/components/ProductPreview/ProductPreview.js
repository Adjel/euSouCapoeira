import React from "react";
import ProductPreviewItem from "./ProductPreviewItem";
import { products } from "../../providers/RecomandsProvider";

function ProductPreview() {
  return (
    <div className="flex items-center p-2 pr-3">
      {products.map(({ image, alt, name, price, rate, rateNbr, id }) => (
        <ProductPreviewItem
          key={id}
          productName={name}
          image={image}
          alt={alt}
          price={price}
          rate={rate}
          rateNbr={rateNbr}
        />
      ))}
    </div>
  );
}

export default ProductPreview;
