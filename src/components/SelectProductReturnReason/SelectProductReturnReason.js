import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useProductSortStore from "@/stores/useProductsSortStore";

function SelectProductReturnReason({ className }) {
  const [sortOption, setSortOption] = useState();

  return (
    <Select value={sortOption} onValueChange={() => setSortOption(sortOption)}>
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
