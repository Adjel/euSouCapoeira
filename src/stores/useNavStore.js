import { create } from "zustand";

export const useMobileNavStore = create((set) => ({
  isOpen: false,
  toggle: () => {
    set((state) => {
      return { isOpen: !state.isOpen };
    });
  },
  close: () => {
    set({ isOpen: false });
  },
}));
