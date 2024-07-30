import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import fourhfour from "../../public/fakeAddimages/fourhfour.jpg";
import Image from "next/image";
import RecommandsComponent from "@/components/RecommandsComponent";
import "@/styles/globals.css";

export default function NotFound() {
  return (
    <section className="flex flex-col basicPadding py-7 gap-16">
      <div className="flex gap-2 mt-12">
        <div className="flex flex-col w-full lg:2/3 justify-center items-center gap-8">
          <header className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">
              Uh Oh! Cette page n'existe plus ou n'a peut-être jamais existé!
            </h2>
            <span className="">{`Vous pouvez tout de même rejoindre l'acceuil via le bouton en dessous, ou alors naviguer comme vous le faite habituellement :)`}</span>
          </header>
          <Button className="w-fit">
            <Link href="/">Retourner à l'acceuil</Link>
          </Button>
        </div>
        <Image
          src={fourhfour}
          alt="deux capoeiristes sur la plage"
          className="hidden lg:block w-96 h-auto rounded"
        />
      </div>
      <RecommandsComponent />
    </section>
  );
}
