import { create } from "zustand";
import {
  mockAddAdress,
  mockCreateAccount,
  mockUpdateAdress,
  mockUserToken,
  mockDeleteAddress,
  mockUpdateUser,
} from "@/providers/logInProvider";
import {
  getUserFromCookies,
  removeUserCoockie,
  setUserCookies,
} from "@/coockieStore/userCoockies";
import { products } from "@/providers/productsProvider";

const useUserStore = create((set, get) => ({
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

const useWishList = create((set) => ({
  updateUserWishList: async (wishList) => {
    const { user, updateUser } = useUserStore.getState();
    const udpatedUser = {
      ...user,
      wishList: {
        date: new Date(),
        productIdList: wishList.productIdList,
      },
    };
    updateUser(udpatedUser);
  },
  toggle: (productId) => {
    const { user } = useUserStore.getState();
    const { updateUserWishList } = useWishList.getState();
    const userwishList = user?.wishList;

    const existingProduct = userwishList?.productIdList?.find(
      (item) => item === productId
    );
    let updatedList;
    if (existingProduct) {
      updatedList = userwishList.productIdList.filter(
        (item) => item !== productId
      );
    } else {
      if (userwishList && userwishList.length > 0) {
        updatedList = [...userwishList.productIdList, productId];
      }
    }
    const wishList = {
      date: new Date(),
      productIdList: updatedList,
    };
    updateUserWishList(wishList);
  },

  getProductsByWishList: () => {
    const { user } = useUserStore.getState();
    const wishList = user?.wishList;

    const produitsFiltres = products.map((subCategory) =>
      subCategory.products.filter((item) =>
        wishList?.productIdList.includes(item.id)
      )
    );
    return produitsFiltres;
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
