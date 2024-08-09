import { useUserStore } from "./useUserStore";
import { create } from "zustand";
import { getMockWishlistTable } from "@/providers/wishlistListProvider";

/*
const useWishList = create((set, get) => ({
    wishlistList: [],
    updateUserWishList: async (updatedWishlist) => {
      const { user } = useUserStore.getState();
      const { updateUserInfo } = useUpdateUserInfo.getState();
  
      // créer nouvelle wishlistList avec modification de current
      const updatedWishlistList = user.wishlistList?.map((wishlist) => {
        console.log(wishlist);
        console.log(updatedWishlist);
        if (wishlist.id === updatedWishlist.id) {
          return {
            ...updatedWishlist,
            isCurrent: true,
          };
        } else {
          return {
            ...wishlist,
            isCurrent: false,
          };
        }
      });
  
      console.log(updatedWishlistList);
      // TODO
  
      // vérifier si utilsateur ou pas
      if (user) {
        // si oui créer utilisatuer et update utilisateur
        const udpatedUser = {
          ...user,
          wishlist: undefined,
          wishlistList: updatedWishlistList,
        };
        console.log(udpatedUser);
        // This will update user in cookies, storage and state
        updateUserInfo(udpatedUser);
      } else {
        updateMockWishList(updatedWishlist);
        // sinon update local
      }
      console.log(updatedWishlistList);
      set({ wishlistList: updatedWishlistList });
    },
    toggle: async (productId) => {
      // créer puis renvoyer la nouvelle liste =>
      let updatedWishList;
  
      // récupérer la current list (qui est dans la liste de liste de souhaits)
      const { getCurrentWishList, updateUserWishList } = get();
      const currentWishList = await getCurrentWishList();
  
      console.log(currentWishList);
  
      // chercher le produit
      const existingProduct = currentWishList.idList.find(
        (id) => id === productId
      );
      // s'il n'existe pas ajouter le produit
      if (!existingProduct) {
        updatedWishList = {
          ...currentWishList,
          idList: [...currentWishList.idList, productId],
        };
      } else {
        updatedWishList = {
          ...currentWishList,
          idList: currentWishList.idList.filter((id) => id !== productId),
        };
      }
      console.log(updatedWishList);
      // mettre à jour la wishlistList
      await updateUserWishList(updatedWishList);
    },
  
    getCurrentWishList: async () => {
      // récupérer la current list =>
      const { user } = useUserStore.getState();
      let currentWishList;
      // si user chercher dans user
      if (user) {
        // si existe récupérer celle qui est current
        // sinon créer et la passer en current
        const date = new Date();
        console.log(user);
  
        currentWishList = user.wishlistList?.find(
          (wishlist) => wishlist.isCurrent
        ) || {
          date: date,
          isCurrent: true,
          name: `Liste des envies du ${date.toLocaleDateString()}`,
          id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
          idList: [],
        };
  
        // si pas user chercher dans storage
      } else {
        currentWishList = await mockGetCurrentWishlist();
      }
      set({ wishlist: currentWishList });
      return currentWishList;
    },
    addWishList: async (newWishlist) => {
      const { user } = useUserStore();
      const { updateUserInfo } = useUpdateUserInfo.getState();
  
      let newWishlisList;
  
      if (!user.wishlistList) {
        newWishlisList = [];
      } else {
        newWishlisList = user.wishlistList.map((wishlist) => {
          return {
            ...wishlist,
            isCurrent: false,
          };
        });
      }
  
      newWishlisList.push(newWishlist);
      const newUser = { ...user, wishlistList: newWishlisList };
      console.log(newUser);
      updateUserInfo(newUser);
    },
    createWishList: async (name) => {
      const { addWishList } = get();
      const date = new Date();
      const newWishlist = {
        date: date,
        isCurrent: true,
        name: `${name}` ?? `Liste des envies du ${date.toLocaleDateString()}`,
        id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
        idList: [],
      };
      addWishList(newWishlist);
    },
    getProductsByWishList: () => {
      const { user } = useUserStore.getState();
      const { createWishList } = get();
      console.log(user?.wishlistList);
  
      if (!user.wishlistList) return createWishList();
  
      const wishList = user?.wishlistList?.find((wl) => wl.isCurrent);
  
      console.log(wishList);
  
      const filteredProducts = products.map((subCategory) =>
        subCategory.products.filter((item) => wishList?.includes(item.id))
      );
      return filteredProducts;
    },
  }));
  */

const useWishList = create((set, get) => {
  // Récupérer l'utilisateur du store useUserStore
  const user = useUserStore.getState().user;

  // Create the object which will be returned and exposed to components
  const initialState = {
    wishlistTable: [],
    setWishlistTable: (wishlistTable) => set({ wishlistTable }),

    updateWishlistTable: async (updatedWishlist) => {
      try {
        await updateMockWishList(updatedWishlist);
        const wishlistTable = get().wishlistTable.map((wishlist) =>
          wishlist.id === updatedWishlist.id ? updatedWishlist : wishlist
        );
        set({ wishlistTable });
      } catch (error) {
        console.error("Failed to update wishlist:", error);
      }
    },

    // Supprimer une wishlist spécifique
    deleteWishListTable: async (wishlistId) => {
      try {
        await deleteMockWishList(wishlistId);
        const wishlistTable = get().wishlistTable.filter(
          (wishlist) => wishlist.id !== wishlistId
        );
        set({ wishlistTable });
      } catch (error) {
        console.error("Failed to delete wishlist:", error);
      }
    },
  };

  // Initial load of the wishlistTable
  getMockWishlistTable(user).then((wishlistTable) => {
    set({ wishlistTable });
  });
  /**
     * 
    .catch((error) => {
        console.error("Failed to load wishlist table:", error);
    });
    */

  return initialState;
});

export { useWishList };
