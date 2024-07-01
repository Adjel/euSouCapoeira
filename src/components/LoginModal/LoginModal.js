"use client";
import React, { useEffect } from "react";
import { useLoginModalStore } from "@/stores/useUserStore";

function LoginModal() {
  const { isOpen } = useLoginModalStore();

  useEffect(() => {
    console.log({ isOpen });
  }, [isOpen]);

  return (
    isOpen && (
      <aside className="absolute top-0 right-0 w-46 h-full bg-blue-600"></aside>
    )
  );
}

export default LoginModal;
