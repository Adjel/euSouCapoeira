import { create } from "zustand";

const defaultDate = new Date().toLocaleDateString();

export const useWishlist = create((set, get) => ({
  wishlistTable: [
    {
      userId: "",
      date: defaultDate,
      name: `Liste d'envies du ${defaultDate}`,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      isCurrent: true,
      idList: [],
    },
  ],

  currentWishlist: null,

  // avoid to forget update one of two states when udpate at least one
  updateWishlistState: (newState) => {
    set(newState);
    get().initCurrentWishlist();
  },

  // auto currentWishlist initialisation
  initCurrentWishlist: () => {
    const current = get().wishlistTable.find((wishlist) => wishlist.isCurrent);
    set({ currentWishlist: current });
  },

  createWishlist: (name) => {
    const newName = name ?? `Liste d'envies du ${defaultDate}`;

    const newWishlist = {
      userId: "",
      date: defaultDate,
      name: newName,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      isCurrent: true,
      idList: [],
    };

    const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
      ...wishlist,
      isCurrent: false,
    }));

    get().updateWishlistState({
      wishlistTable: [...updatedWishlistTable, newWishlist],
    });
  },

  udpateWishlistName: (name, wishlistId) => {
    const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
      ...wishlist,
      name: wishlist.id === wishlistId ? name : wishlist.name,
    }));

    get().updateWishlistState({ wishlistTable: updatedWishlistTable });
  },

  deleteWishlist: (id) => {
    const wishlistTableRef = get().wishlistTable;

    // Vérifier s'il y a plus d'une liste de souhaits
    if (wishlistTableRef.length > 1) {
      let updatedWishlistTable = wishlistTableRef.filter(
        (wishlist) => wishlist.id !== id
      );
      if (!updatedWishlistTable.find((item) => item.isCurrent)) {
        updatedWishlistTable = updatedWishlistTable.map((wishlist, index) => ({
          ...wishlist,
          isCurrent: index === 0,
        }));
      }

      get().updateWishlistState({ wishlistTable: updatedWishlistTable });
    }
  },

  /////////////////// CURRENT WISHLIST ///////////////////////

  getCurrentWishlist: () => {
    const current = get().wishlistTable.find((wishlist) => wishlist.isCurrent);
    return current;
  },

  setCurrentWishlist: (id) => {
    const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
      ...wishlist,
      isCurrent: wishlist.id === id,
    }));

    get().updateWishlistState({ wishlistTable: updatedWishlistTable });
  },

  updateCurrentWishlist: (wishlist) => {
    const newWishlistTable = get().wishlistTable.map((wl) =>
      wl.id === wishlist.id ? { ...wishlist } : wl
    );

    get().updateWishlistState({ wishlistTable: newWishlistTable });
  },

  /////////////////// PRODUCTS ID AND PRODUCT ///////////////////////

  toggle: (id) => {
    const updateCurrentWishlist = get().updateCurrentWishlist;
    const current = get().getCurrentWishlist();

    const updatedIdList = current.idList.find((productId) => productId === id)
      ? current.idList.filter((pId) => pId !== id)
      : [...current.idList, id];

    const newWishlist = { ...current, idList: updatedIdList };

    updateCurrentWishlist(newWishlist);
  },
}));

// Initialise currentWishlist when store is created
useWishlist.getState().initCurrentWishlist();
