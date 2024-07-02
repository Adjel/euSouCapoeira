import { create } from "zustand";
import createAccount from "@/providers/logInProvider";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
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
    } catch (error) {
      console.error("Failed to sign up:", error);
      throw error;
    }
  },
}));

const useLoginModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export { useUserStore, useLoginModalStore, useSignUp };
