import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectNumberToDisplay({ number, setNumber, maxOptionNumber }) {
  const SetOption = ({ value }) => {
    return value <= maxOptionNumber ? (
      <SelectItem value={`${value}`}>{value} Produits</SelectItem>
    ) : undefined;
  };

  return (
    <Select value={number} onValueChange={(value) => setNumber(value)}>
      <SelectTrigger
        className={`w-[120px] h-fit border border-color-dark-gray rounded-xl`}
      >
        <SelectValue>
          {number ? `${number} Produits` : "Choisissez un nombre"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SetOption value={5} />
        <SetOption value={10} />
        <SetOption value={15} />
        <SetOption value={25} />
        <SetOption value={50} />
      </SelectContent>
    </Select>
  );
}

export default SelectNumberToDisplay;
