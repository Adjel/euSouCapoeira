import { create } from "zustand";
import createAccount from "@/providers/logInProvider";
import { toast } from "@/components/ui/use-toast";

const useUserStore = create((set) => ({
  //user: null,
  user: {
    firstName: "Patrick",
    lastName: "toupie",
    email: "P-toupie@toto.com",
    adress: [
      {
        isCurrent: "",
        firstName: "Patrick",
        lastName: "toupie",
        nbrAndStreet: "10 rue du vent",
        codeAndCity: "41000 Dally",
        country: "Thailand",
      },
      {
        isCurrent: "",
        firstName: "Jean",
        lastName: "toupie",
        nbrAndStreet: "12 rue de la montagne",
        codeAndCity: "70000 David",
        country: "Panama",
      },
    ],
    commands: [
      {
        date: "",
        articles: [],
        totalPrice: "",
      },
    ],
  },
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

const useLoginModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useUserStore, useLoginModalStore, useSignUp };
