import { create } from "zustand";
import { mockCreateAccount, mockUserToken } from "@/providers/logInProvider";

const useUserStore = create((set) => ({
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
  updateUser: (updatedUser) => {
    set((state) => ({
      user: { ...state.user, ...updatedUser },
    }));
    return "success";
  },
  clearUser: () => set({ user: null }),
  addAdress(address) {
    const date = new Date();
    const newAddress = {
      date,
      ...address,
      // The site only support France shipment, so we secure the country
      country: "France",
    };
    set((state) => ({
      user: {
        ...state.user,
        addresses: [...state.user.addresses, newAddress],
      },
    }));
    toast({
      title: "Votre adresse à bien été enregistrée",
    });
    //TODO: Return success from API
    return true;
  },

  setCurrentAddress: (date) =>
    set((state) => {
      const updatedAddresses = state.user.addresses.map((address) => ({
        ...address,
        isCurrent: address.date === date,
      }));
      return {
        user: {
          ...state.user,
          addresses: updatedAddresses,
        },
      };
    }),

  deleteAddress: (date) =>
    set((state) => {
      const addresses = state.user.addresses.filter(
        (address) => address.date !== date
      );
      return {
        user: {
          ...state.user,
          addresses,
        },
      };
    }),
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
    const { updateUser } = useUserStore.getState();
    const { setIsOpen } = useLoginModalStore.getState();

    try {
      const user = await mockUserToken({ email, password });
      updateUser(user);
      // Modal have to autoclose when user is connected
      setIsOpen(false);
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

export { useUserStore, useLoginModalStore, useSignIn, useSignUp };
