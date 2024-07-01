"use client";
import React from "react";
import { useLoginModalStore } from "@/stores/useUserStore";

function LoginModal() {
  const { isOpen } = useLoginModalStore();

  return (
    isOpen && (
      <div>
        <div className="z-50 absolute top-0 bottom-0 w-full h-full bg-extreme-dark-gray opacity-50"></div>
        <aside className="z-50 absolute top-0 bottom-0 right-0 w-full md:w-96 lg:w-31.5 h-full bg-white"></aside>
      </div>
    )
  );
}

export default LoginModal;
