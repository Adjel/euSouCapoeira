import { create } from "zustand";

const useProductSortStore = create((set) => ({
  sortOption: "Popularité",
  setSortOption: (option) => set({ sortOption: option }),
}));

export default useProductSortStore;
