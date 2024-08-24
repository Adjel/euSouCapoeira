import { getWishlistTable, updateWishlist } from "@/providers/wishlistProvider";
import { create } from "zustand";
import { getUserFromCookies } from "@/coockieStore/userCoockies";
import { products } from "@/providers/productsProvider";
import { toast } from "@/components/ui/use-toast";

const defaultDate = new Date().toLocaleDateString();

export const useWishlist = create((set, get) => {
  return {
    wishlistTable: [],

    currentWishlist: null,
    currentProductWishlist: [],
    toggleModify: false,
    toggleMenu: false,

    setToggleMenu: () => {
      set((state) => ({ toggleMenu: !state.toggleMenu }));
    },

    setToggleModify: () => {
      set((state) => ({ toggleModify: !state.toggleModify }));
    },

    ///////////////////////// HANDLE STATE ///////////////////////////

    getWishlistTableState: async (user) => {
      try {
        // by default the user is logged or by cookies or not logged
        const coockieUser = getUserFromCookies();
        // so wishlist will be uppdate when it need if user log in
        const data = await getWishlistTable(user ?? coockieUser);
        set({
          wishlistTable: data,
        });
        get().initCurrentWishlist();
      } catch (e) {
        toast({ title: `Une erreur est survenue: code erreur ${e}` });
      }
    },

    // avoid to forget update one of two states when udpate at least one
    updateWishlistState: (user, newState) => {
      set(newState);
      updateWishlist(user, newState.wishlistTable);
      get().initCurrentWishlist();
      set({ toggleModify: false });
    },

    // auto currentWishlist initialisation
    initCurrentWishlist: () => {
      const current = get().wishlistTable.find(
        (wishlist) => wishlist.isCurrent
      );
      get().getCurrentWishlistProducts(current);
      set({ currentWishlist: current });
    },

    ///////////////////// WISHLIST ///////////////////////

    createWishlist: (user, name) => {
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

      get().updateWishlistState(user, {
        wishlistTable: [...updatedWishlistTable, newWishlist],
      });
    },

    udpateWishlistName: (user, name) => {
      const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
        ...wishlist,
        name: wishlist.isCurrent ? name : wishlist.name,
      }));

      get().updateWishlistState(user, { wishlistTable: updatedWishlistTable });
    },

    deleteWishlist: (user, id) => {
      const wishlistTableRef = get().wishlistTable;

      // Vérifier s'il y a plus d'une liste de souhaits
      if (wishlistTableRef.length > 1) {
        let updatedWishlistTable = wishlistTableRef.filter(
          (wishlist) => wishlist.id !== id
        );
        if (!updatedWishlistTable.find((item) => item.isCurrent)) {
          updatedWishlistTable = updatedWishlistTable.map(
            (wishlist, index) => ({
              ...wishlist,
              isCurrent: index === 0,
            })
          );
        }

        get().updateWishlistState(user, {
          wishlistTable: updatedWishlistTable,
        });
      }
    },

    /////////////////// CURRENT WISHLIST ///////////////////////

    getCurrentWishlistProducts: (current) => {
      const currentWishlistProducts = [];

      // find and set products by id
      products.forEach((subCategory) => {
        subCategory.products.forEach((product) => {
          current.idList.map(({ id, quantity = 1 }) => {
            if (id === product.id)
              currentWishlistProducts.push({
                ...product,
                quantity,
              });
          });
        });
      });
      set({
        currentProductWishlist: currentWishlistProducts,
      });
    },

    getCurrentWishlist: () => {
      const current = get().wishlistTable.find(
        (wishlist) => wishlist.isCurrent
      );
      return current;
    },

    setCurrentWishlist: (user, id) => {
      const updatedWishlistTable = get().wishlistTable.map((wishlist) => ({
        ...wishlist,
        isCurrent: wishlist.id === id,
      }));

      get().updateWishlistState(user, { wishlistTable: updatedWishlistTable });
    },

    updateCurrentWishlist: (user, wishlist) => {
      const newWishlistTable = get().wishlistTable.map((wl) =>
        wl.id === wishlist.id ? { ...wishlist } : wl
      );

      get().updateWishlistState(user, { wishlistTable: newWishlistTable });
    },

    /////////////////// (ADD) PRODUCTS ID AND PRODUCT ///////////////////////

    toggle: (user, id) => {
      const updateCurrentWishlist = get().updateCurrentWishlist;
      const current = get().getCurrentWishlist();

      const updatedIdList = current.idList.find((obj) => obj.id === id)
        ? current.idList.filter((item) => item.id !== id)
        : [...current.idList, { id: id, quantity: 1 }];

      const newWishlist = { ...current, idList: updatedIdList };

      updateCurrentWishlist(user, newWishlist);
    },

    toggleQuantity: (user, id, isAdd) => {
      const { updateCurrentWishlist, getCurrentWishlist } = get();

      const updateItemQuantity = (item, isAdd) => {
        const newQuantity = isAdd
          ? item.quantity < 99
            ? item.quantity + 1
            : item.quantity
          : item.quantity > 1
          ? item.quantity - 1
          : 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      };

      const current = getCurrentWishlist();

      const updatedIdList = current.idList.map((item) =>
        item.id === id ? updateItemQuantity(item, isAdd) : item
      );

      const newWishlist = { ...current, idList: updatedIdList };

      updateCurrentWishlist(user, newWishlist);
    },
  };
});

// Initialise currentWishlist when store is created
useWishlist.getState().getWishlistTableState();
