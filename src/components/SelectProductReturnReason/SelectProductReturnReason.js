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
  setReasonOption,
}) {
  return (
    <Select
      value={reasonOption}
      onValueChange={() => setReasonOption(reasonOption)}
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
