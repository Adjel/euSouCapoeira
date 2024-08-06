import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectNumberToDisplay({ number, setNumber }) {
  return (
    <Select value={number} onValueChange={(value) => setNumber(value)}>
      <SelectTrigger className={`w-[180px]`}>
        <SelectValue placeholder={`${number} produits`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5 produits</SelectItem>
        <SelectItem value="10">10 produits</SelectItem>
        <SelectItem value="25">25 produits</SelectItem>
        <SelectItem value="50">50 produits</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectNumberToDisplay;
