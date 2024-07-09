import SignInForm from "@/components/Forms/SignInForm";
import React from "react";
import Link from "next/link";
import "@/styles/globals.css";

export default function page() {
  return (
    <section className="flex flex-col justify-center items-center py-6">
      <h2 className="text-6xl font-bold text-center my-7">
        Connection à l'espace client
      </h2>
      <span className="flex flex-col w-1/2 justify-center items-center p-8 gap-6">
        <SignInForm className="w-full" />
        <div className="flex flex-col mt-6 gap-8 items-center">
          <Link href="/pw_lost" className="signLink">
            vous avez oublié votre mot de pase ?
          </Link>
          <hr className="w-full borderb-2 border-color-dark-gray" />
          <div className="text-extreme-dark-gray">Pas encore de compte ?</div>
          <Link href="/signup" className="signLink">
            s'inscrire maintenant
          </Link>
        </div>
      </span>
    </section>
  );
}
