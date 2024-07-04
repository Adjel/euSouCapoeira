import { create } from "zustand";
import createAccount, { mockUser } from "@/providers/logInProvider";
import { toast } from "@/components/ui/use-toast";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  addAdress(address) {
    set((state) => ({
      user: {
        ...state.user,
        addresses: [...state.user.addresses, address],
      },
    }));
  },
  setCurrentAddress: (date) =>
    set((state) => {
      console.log({ date });
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
  signUp: async (email, password) => {
    try {
      const user = await createAccount({ email, password });
      const { setUser } = useUserStore.getState();
      const { setIsOpen } = useLoginModalStore.getState();
      setUser(user);
      // Modal have to autoclose when user is connected
      setIsOpen(false);
      // Toast
      toast({
        title: "Vous êtes connecté !",
      });
    } catch (error) {
      console.error("Failed to sign up:", error);
      throw error;
    }
  },
}));

const useSignUpMock = create((set) => ({
  signUpMock: async () => {
    const user = await mockUser();
    const { setUser } = useUserStore.getState();
    const { setIsOpen } = useLoginModalStore.getState();
    console.log({ user });
    setUser(user);
    // Modal have to autoclose when user is connected
    setIsOpen(false);
    // Toast
    toast({
      title: "Vous êtes connecté (Mock) !",
    });
  },
}));

const useLoginModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

export { useUserStore, useLoginModalStore, useSignUp, useSignUpMock };
