import { create } from "zustand";

const defaultdate = new Date().toLocaleDateString();

export const useWishlist = create((set, get) => ({
  wishlistTable: [
    {
      userId: "",
      date: defaultdate,
      name: `Liste d'envies du ${defaultdate}`,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      isCurrent: true,
      idList: [],
    },
  ],
  createWishlist: async (name) => {
    const newName = name ?? `Liste d'envies du ${defaultdate}`;

    const newWishlist = {
      userId: "",
      date: defaultdate,
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

  deleteWishlist: async (id) => {
    const wishlistTableRef = get().wishlistTable;

    // Vérifier s'il y a plus d'une liste de souhaits
    if (wishlistTableRef.length > 1) {
      const updatedWishlistTable = wishlistTableRef.filter(
        (wishlist) => wishlist.id !== id
      );
      if (!updatedWishlistTable.find((item) => item.isCurrent)) {
        updatedWishlistTable.map((wishlist, index) => ({
          ...wishlist,
          isCurrent: index === 0,
        }));
      }

      set({ wishlistTable: updatedWishlistTable });
    }
  },

  /////////////////// CURRENT WISHLIST ///////////////////////

  getCurrentWishlist: () => {
    const current = get().wishlistTable.find((wishlist) => wishlist.isCurrent);
    return current;
  },

  updateCurrentWishlist: async (wishlist) => {
    const wishlistTable = get().wishlistTable;
    const newWishlistTable = wishlistTable.map((wl) =>
      wl.id === wishlist.id ? { ...wishlist } : wl
    );

    set({ wishlistTable: newWishlistTable });
  },

  /////////////////// PRODUCTS ID AND PRODUCT ///////////////////////

  toggle: async (id) => {
    const updateCurrentWishlist = get().updateCurrentWishlist;
    const current = await get().getCurrentWishlist();

    const updatedIdList = current.idList.find((productId) => productId === id)
      ? current.idList.filter((pId) => pId !== id)
      : [...current.idList, id];

    const newWishlist = { ...current, idList: updatedIdList };

    updateCurrentWishlist(newWishlist);
  },
}));
