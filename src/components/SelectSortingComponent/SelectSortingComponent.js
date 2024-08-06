import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useProductSortStore from "@/stores/useProductsSortStore";

function SelectSortingComponent() {
  const { sortOption, setSortOption } = useProductSortStore();

  return (
    <Select value={sortOption} onValueChange={setSortOption}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Popularité" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Popularité">Popularité</SelectItem>
        <SelectItem value="Prix: - cher au + cher">
          Prix: - cher au + cher
        </SelectItem>
        <SelectItem value="Prix: + cher au - cher">
          Prix: + cher au - cher
        </SelectItem>
        <SelectItem value="Nouveaux produits">Nouveaux produits</SelectItem>
        <SelectItem value="Meilleur évaluation">Meilleur évaluation</SelectItem>
        <SelectItem value="Alphabétique A - Z">Alphabétique A - Z</SelectItem>
        <SelectItem value="Alphabétique Z - A">Alphabétique Z - A</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectSortingComponent;
