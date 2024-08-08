import { create } from "zustand";
import {
  mockAddAdress,
  mockCreateAccount,
  mockUpdateAdress,
  mockUserToken,
  mockDeleteAddress,
  mockUpdateUser,
} from "@/providers/userProvider";
import {
  getUserFromCookies,
  removeUserCoockie,
  setUserCookies,
} from "@/coockieStore/userCoockies";
import { products } from "@/providers/productsProvider";
import {
  mockGetCurrentWishlist,
  updateMockWishList,
} from "@/providers/wishlistListProvider";

const useUserStore = create((set) => ({
  user: getUserFromCookies(),
  createUser: async (values) => {
    const {
      business,
      email,
      password,
      firstName,
      lastName,
      city,
      street,
      zipCode,
      country,
    } = values;
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      addresses: [
        {
          firstName,
          lastName,
          date: new Date(),
          isCurrent: true,
          business: business,
          street,
          city,
          zipCode,
          // At first creation we set default adress to france because we only sell in France
          country: "France",
        },
      ],
    };
    try {
      await mockCreateAccount(user);
      set({ user });
      setUserCookies(user);
      return "sucess";
    } catch (error) {
      throw error;
    }
  },
  logUser: async (email, password) => {
    try {
      const user = await mockUserToken({ email, password });
      set({ user });
      setUserCookies(user);
      return "success";
    } catch (error) {
      throw error;
    }
  },
  updateUser: (updatedUser) => {
    set((state) => ({
      user: { ...state.user, ...updatedUser },
    }));
    setUserCookies(updatedUser);
  },
  clearUser: () => {
    removeUserCoockie(), set({ user: null });
  },
}));

const useSignUp = create((set) => ({
  signUp: async (user) => {
    const { createUser } = useUserStore.getState();
    const { setIsOpen } = useLoginModalStore.getState();
    try {
      const result = await createUser(user);
      // Modal have to autoclose when user is connected
      setIsOpen(false);
      return result;
    } catch (error) {
      throw error;
    }
  },
}));

const useSignIn = create((set) => ({
  signIn: async (email, password) => {
    const { logUser } = useUserStore.getState();
    const { setIsOpen } = useLoginModalStore.getState();
    try {
      await logUser(email, password);
      // Modal have to autoclose when user is connected
      setIsOpen(false);
      return "success";
    } catch (error) {
      throw error;
    }
  },
}));

const useSignOut = create((set) => ({
  signOut: async () => {
    const { clearUser } = useUserStore.getState();
    try {
      clearUser();
    } catch (error) {
      throw error;
    }
  },
}));

const useUpdateUserInfo = create((set) => ({
  updateUserInfo: async (values) => {
    const { user, updateUser } = useUserStore.getState();
    try {
      const updatedUser = await mockUpdateUser(user, values);
      updateUser(updatedUser);
    } catch (e) {
      throw e;
    }
  },
}));

const useUserAdress = create((set) => ({
  addAdress: async (address) => {
    const { user, updateUser } = useUserStore.getState();
    const date = new Date();
    const newAddress = {
      date,
      ...address,
      // The site only support France shipment, so we secure the country
      country: "France",
    };
    try {
      const udpatedUser = await mockAddAdress(user, newAddress);
      updateUser(udpatedUser);
      return "success";
    } catch (error) {
      throw error;
    }
  },

  setCurrentAddress: async (addressDate) => {
    const { user, updateUser } = useUserStore.getState();
    try {
      const updatedUser = await mockUpdateAdress(user, addressDate);
      updateUser(updatedUser);
      return "success";
    } catch (error) {
      throw error;
    }
  },

  deleteAddress: async (date) => {
    const { user, updateUser } = useUserStore.getState();
    try {
      const updatedUser = await mockDeleteAddress(user, date);
      updateUser(updatedUser);
      return "success";
    } catch (error) {
      throw error;
    }
  },
}));

const useLoginModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

const useWishList = create((set, get) => ({
  wishlistList: [],
  updateUserWishList: async (updatedWishlist) => {
    const { user } = useUserStore.getState();
    const { updateUserInfo } = useUpdateUserInfo.getState();

    // créer nouvelle wishlistList avec modification de current
    const updatedWishlistList = user.wishlistList?.map((wishlist) => {
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
  createWishList: async (name) => {
    const { updateUserWishList } = get();
    const date = new Date();
    const newWishList = {
      date: date,
      isCurrent: true,
      name: `${name}` ?? `Liste des envies du ${date.toLocaleDateString()}`,
      id: `${crypto.randomUUID()}${new Date().toISOString().split("T")[0]}`,
      idList: [],
    };
    updateUserWishList(newWishList);
  },
  getProductsByWishList: () => {
    const { user } = useUserStore.getState();
    const wishList = user?.wishList.find((wl) => wl.isCurrent)?.idList || [];

    const filteredProducts = products.map((subCategory) =>
      subCategory.products.filter((item) => wishList.includes(item.id))
    );
    return filteredProducts;
  },
}));

export {
  useUserStore,
  useLoginModalStore,
  useUpdateUserInfo,
  useSignIn,
  useSignUp,
  useSignOut,
  useUserAdress,
  useWishList,
};
