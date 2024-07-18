import { create } from "zustand";

export const useMobileNavStore = create((set) => ({
  isOpen: false,
  toggle: () => {
    set((state) => {
      const newState = state.isOpen;
      console.log(newState);
      return { isOpen: !state.isOpen };
    });
  },
  close: () => {
    set({ isOpen: false });
  },
}));
