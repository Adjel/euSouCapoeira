import { create } from "zustand";
import createAccount from "@/providers/logInProvider";
import { toast, useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

// Hook personnalisé pour surveiller les changements de l'utilisateur
const useUserLogger = () => {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    console.log("User state changed:", user);
  }, [user]);
};

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

export { useUserStore, useLoginModalStore, useSignUp, useUserLogger };
