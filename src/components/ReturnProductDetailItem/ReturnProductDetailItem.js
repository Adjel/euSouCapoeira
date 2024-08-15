import React from "react";
import CategoryItem from "../Categories/CategoryItem";

function ReturnProductDetailItem({
  commandId,
  product,
  inputError,
  setReturnProductDetails,
  reason,
  details,
}) {
  return (
    <div className="flex flex-col justify-center gap-6">
      <CategoryItem
        key={product.id}
        title={product.name}
        image={product.images[0].image}
        alt={product.images[0].alt}
        isLink={false}
      />
      <span>{reason}</span>
      <textarea
        className="p-4 min-h-40 w-full border rounded border-color-dark-gray"
        placeholder="Pouvez-vous décrire le problème svp:"
        type="text"
        value={details}
        onChange={(event) =>
          setReturnProductDetails(commandId, product.id, event.target.value)
        }
      />
      {details === "" && inputError !== "" && (
        <span className="text-color-error mr-auto">{inputError}</span>
      )}
    </div>
  );
}

export default ReturnProductDetailItem;
