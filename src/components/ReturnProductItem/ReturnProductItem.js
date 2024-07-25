import React, { useState } from "react";
import ReturnProductCheckbox from "../ReturnProductCheckbox";
import CategoryItem from "../Categories/CategoryItem";
import SelectProductReturnReason from "../SelectProductReturnReason";

function ReturnProductItem({ toggle, name, imageSrc, alt }) {
  const [isChecked, setIschecked] = useState(false);

  const handleCheckbox = () => {
    setIschecked(!isChecked);
    toggle();
  };

  console.log(isChecked);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-2 items-center">
        <ReturnProductCheckbox
          className="rounded size-6 text-color-dark-gray"
          isChecked={isChecked}
          toggle={handleCheckbox}
        />
        <CategoryItem title={name} image={imageSrc} alt={alt} preLink={""} />
      </div>
      {isChecked && (
        <SelectProductReturnReason
          className="w-fit border rounded ml-auto"
          isChecked={isChecked}
        />
      )}
    </div>
  );
}

export default ReturnProductItem;
