import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectProductReturnReason({
  className,
  reasonOption,
  handleSelectReason,
}) {
  return (
    <Select
      value={reasonOption}
      onValueChange={(value) => handleSelectReason(value)}
    >
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue placeholder="Pour quelle raison?" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Dommage problème ou fonctionnel">
          Dommage problème ou fonctionnel
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectProductReturnReason;
