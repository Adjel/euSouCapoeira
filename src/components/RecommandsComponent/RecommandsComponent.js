import React from "react";
import ProductPreview from "../ProductPreview";

function RecommandsComponent({ title }) {
  return (
    <div className="flex-col items-center">
      <h2 className="h2title">{title}</h2>
      <ProductPreview title={title} className="border-2 border-blue-700" />
    </div>
  );
}

export default RecommandsComponent;
