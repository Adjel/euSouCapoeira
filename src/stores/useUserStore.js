import { create } from "zustand";
import { persist } from "zustand/middleware";
import createAccount, { mockUser } from "@/providers/logInProvider";
import { toast } from "@/components/ui/use-toast";

// to prevent access storage from server
const isClient = typeof window !== "undefined";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      createUser: (values) => {
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
        set({ user });
        // TODO: get response from API
        if ("mock" === "mock")
          toast({
            title: "Votre compte à bien été crée",
            description: "Vous êtes connecté",
          });
        return true;
      },
      updateUser: (updatedUser) => {
        set((state) => ({
          user: { ...state.user, ...updatedUser },
        }));
        //TODO: Return success from API
        return true;
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
    }),
    {
      name: "user-storage",
      getStorage: () => (isClient ? localStorage : null),
    }
  )
);

const useSignIn = create((set) => ({
  signIn: async (email, password) => {
    try {
      const user = await mockUserToken({ email, password });
      const { updateUser } = useUserStore.getState();
      const { setIsOpen } = useLoginModalStore.getState();
      updateUser(user);
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

const useSignUp = create(() => ({
  signUp: async (user) => {
    const { createUser } = useUserStore.getState();
    const { setIsOpen } = useLoginModalStore.getState();
    createUser(user);
    // Modal have to autoclose when user is connected
    setIsOpen(false);
    // Toast
    toast({
      title: "Vous êtes connecté (Mock) !",
    });
    return true;
  },
}));

const useLoginModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));

export { useUserStore, useLoginModalStore, useSignIn, useSignUp };
