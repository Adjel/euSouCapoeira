import { create } from "zustand";

export const useWishlist = create((set, get) => ({
  wishlistTable: [
    {
      userId: "",
      date: new Date().toLocaleDateString(),
      name: `Liste de souhaits du ${new Date()}`,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      isCurrent: true,
      idList: [],
    },
  ],
  createWishlist: async (state, name) => {
    const date = new Date().toLocaleDateString();
    const newName = name ?? `Liste de souhaits du ${new Date()}`;

    const newWishlist = {
      userId: "",
      date: date,
      name: newName,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      isCurrent: true,
      idList: [],
    };

    const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
      ...wishlist,
      isCurrent: false,
    }));

    set({ wishlistTable: [...updatedWishlistTable, newWishlist] });
  },

  setCurrentWishlist: async (id) => {
    const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
      ...wishlist,
      isCurrent: wishlist.id === id,
    }));
    set({ wishlistTable: updatedWishlistTable });
  },
}));
