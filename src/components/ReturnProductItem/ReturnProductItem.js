import React, { useState } from "react";
import ReturnProductCheckbox from "../ReturnProductCheckbox";
import CategoryItem from "../Categories/CategoryItem";
import SelectProductReturnReason from "../SelectProductReturnReason";

function ReturnProductItem({
  toggle,
  name,
  imageSrc,
  alt,
  commandId,
  id,
  setProductReturnResult,
}) {
  const [isChecked, setIschecked] = useState(false);
  const [reasonOption, setReasonOption] = useState();

  const handleCheckbox = () => {
    setIschecked(!isChecked);
    // product is checked for now but is going to be unchecked, so it have no reason to be returned
    if (isChecked === true) {
      setReasonOption();
    }
    toggle();
    setProductReturnResult(commandId, id, reasonOption);
  };

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
          reasonOption={reasonOption}
          setReasonOption={setReasonOption}
        />
      )}
    </div>
  );
}

export default ReturnProductItem;
