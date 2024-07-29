"use client";
import SignInForm from "@/components/Forms/SignInForm";
import React, { useEffect } from "react";
import Link from "next/link";
import "@/styles/globals.css";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "next/navigation";

export default function page() {
  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/dashboard/mes_informations");
  }, [user]);

  return (
    <section className="flex flex-col justify-center items-center py-6">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
        Connection à l'espace client
      </h2>
      <span className="flex flex-col w-full lg:w-1/2 justify-center items-center p-8 gap-6">
        <SignInForm className="w-full" />

        <Link href="/pw_lost" className="signLink">
          vous avez oublié votre mot de pase ?
        </Link>
        <hr className="w-full borderb-2 border-color-dark-gray mt-4" />
        <div className="flex flex-col mt-4 gap-8 items-center">
          <div className="text-sm md:text-base lg-text-lg text-extreme-dark-gray">
            Pas encore de compte ?
          </div>
          <Link href="/signup" className="signLink">
            s'inscrire maintenant
          </Link>
        </div>
      </span>
    </section>
  );
}
