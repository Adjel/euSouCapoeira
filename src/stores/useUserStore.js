import { create } from "zustand";
import {
  mockAddAdress,
  mockCreateAccount,
  mockUpdateAdress,
  mockUserToken,
} from "@/providers/logInProvider";

const useUserStore = create((set, get) => ({
  user: null,
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
          country,
        },
      ],
    };
    try {
      await mockCreateAccount(user);
      set({ user });
      return "sucess";
    } catch (error) {
      throw error;
    }
  },
  logUser: async (email, password) => {
    try {
      const user = await mockUserToken({ email, password });
      set({ user });
      return "success";
    } catch (error) {
      throw error;
    }
  },
  updateUser: (updatedUser) => {
    set((state) => {
      const newUser = { ...state.user, ...updatedUser };
      console.log(newUser);
      return newUser;
    });
    return "success";
  },
  clearUser: () => set({ user: null }),
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
      logUser(email, password);
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
      const updateU = await mockUpdateAdress(user, addressDate);
      updateUser(updateU);
      return "success";
    } catch (error) {
      throw error;
    }
  },

  deleteAddress: async (date) => {
    const { updateUser } = useUserStore.getState();
    try {
      updateUser((state) => {
        const addresses = state.user.addresses.filter(
          (address) => address.date !== date
        );
        return {
          user: {
            ...state.user,
            addresses,
          },
        };
      });
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

export {
  useUserStore,
  useLoginModalStore,
  useSignIn,
  useSignUp,
  useSignOut,
  useUserAdress,
};
