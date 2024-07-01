"use client";
import React from "react";
import { useLoginModalStore, useUserStore } from "@/stores/useUserStore";
import { IoCloseOutline } from "react-icons/io5";
import DashboardNav from "../DashboardNav";
import SignUpForm from "../SignUpForm";

function LoginModal() {
  const { isOpen } = useLoginModalStore();
  const { user } = useUserStore;

  return (
    isOpen && (
      <div>
        <div className="z-50 absolute top-0 bottom-0 w-full h-full bg-extreme-dark-gray opacity-50"></div>
        <aside className="flex flex-col gap-36 z-50 absolute top-0 bottom-0 right-0 w-full md:w-96 lg:w-31.5 h-full p-8 bg-white">
          <IoCloseOutline className="absolute size-12 mr-16 place-self-end" />
          {user ? (
            <>
              <h2 className="w-fit text-3xl font-bold m-0 p-0">
                Espace client
              </h2>
              <DashboardNav />
            </>
          ) : (
            <>
              <h2 className="w-fit text-3xl font-bold m-0 p-0">Connexion</h2>
              <SignUpForm />
            </>
          )}
        </aside>
      </div>
    )
  );
}

export default LoginModal;
