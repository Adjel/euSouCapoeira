import React from "react";
import { Checkbox } from "../ui/checkbox";

function ReturnProductCheckbox({ toggle, isChecked }) {
  return (
    <Checkbox
      value={isChecked}
      className="rounded size-6 text-color-dark-gray"
      onClick={toggle}
    />
  );
}

export default ReturnProductCheckbox;
