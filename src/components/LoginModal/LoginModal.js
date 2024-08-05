"use client";
import React from "react";
import { useLoginModalStore, useUserStore } from "@/stores/useUserStore";
import { IoCloseOutline } from "react-icons/io5";
import DashboardNav from "../DashboardNav";
import SignInForm from "../Forms/SignInForm";
import Link from "next/link";
import "@/styles/globals.css";
import useUserMounted from "@/lib/useUserMounted";

function LoginModal() {
  const { isOpen, toggle } = useLoginModalStore();
  const { user } = useUserStore();
  const isLogged = useUserMounted();

  return (
    <section>
      <div
        className={`fixed inset-0 bg-extreme-dark-gray transition-opacity duration-500 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed inset-0 z-50 transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* used to close the modal when click outside */}
        <div
          onClick={toggle}
          className="fixed z-50 top-0 bottom-0 left-0 w-full"
        ></div>
        <aside className="flex flex-col gap-6 z-50 absolute top-0 bottom-0 right-0 w-full md:w-96 lg:w-31.5 h-full p-8 bg-white shadow-lg">
          <header className="flex justify-between mb-8">
            <h2 className="w-fit text-3xl font-bold m-0 p-0">
              {isLogged ? "Espace client" : "Connexion"}
            </h2>
            <IoCloseOutline
              className="size-12 cursor-pointer"
              onClick={toggle}
            />
          </header>
          {isLogged && (
            <div>
              <span>
                {user?.firstName} {user?.lastName}
              </span>
              <span>{user?.email}</span>
            </div>
          )}
          {isLogged ? (
            <>
              <DashboardNav />
            </>
          ) : (
            <>
              <SignInForm />
              <div className="flex flex-col mt-6 gap-8 items-center">
                <Link href="/pw_lost" className="signLink" onClick={toggle}>
                  vous avez oublié votre mot de pase ?
                </Link>
                <hr className="w-full borderb-2 border-color-dark-gray" />
                <span className="text-extreme-dark-gray">
                  Pas encore de compte ?
                </span>
                <Link href="/signup" className="signLink" onClick={toggle}>
                  s'inscrire maintenant
                </Link>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}

export default LoginModal;
