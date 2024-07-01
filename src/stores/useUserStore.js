"use client";

import { useEffect } from "react";
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

const useLoginModalStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export { useUserStore, useLoginModalStore };

const LoginModal = () => {
  const { isOpen, setIsOpen } = useLoginModalStore();

  useEffect(() => {
    console.log("isOpen state:", isOpen);
  }, [isOpen]);
};

export default LoginModal;
