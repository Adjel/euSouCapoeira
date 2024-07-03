"use client";
import DashboardNav from "@/components/DashboardNav";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function dashboard({ params }) {
  const { user } = useUserStore();

  const router = useRouter();

  const my_ = params.my_;

  let content = null;
  switch (my_) {
    case "mes_informations":
      content = (
        <section className="flex flex-col  p-7 gap-8">
          <header className="flex w-full lg:gap-16 lg:items-baseline">
            <h2 className="text-5xl font-bold">Carnet d'adresses</h2>
            <span className="lg:ml-auto">
              <Button>Ajouter l'adresse</Button>
            </span>
          </header>
          <span className="flex flex-col gap-4">
            <span className="flex w-1/2 gap-16">
              <h3 className="text-2xl font-bold">Adresse de facturation</h3>
              <span className="ml-auto">ICON</span>
            </span>
            <span>
              <div className={""}>entreprise</div>
              <div>username</div>
              <div>n° et rue</div>
              <div>cp et ville</div>
              <div>pays</div>
            </span>
          </span>
        </section>
      );
      break;
    case "mes_commandes":
      content = <div>Contenu 2</div>;
      break;
    case "mes_adresses":
      content = <div>Contenu 2</div>;
      break;
    case "retour":
      content = <div>Contenu 2</div>;
      break;
    default:
      content = <div>Page non trouvée</div>;
      break;
  }

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  return (
    <div className="flex w-full h-full gap-16 p-8 border-2 border-blue-600">
      <aside className="flex flex-col h-full">
        <header className="flex justify-between mb-8">
          <h2 className="w-fit text-3xl font-bold m-0 p-0">Espace client</h2>
        </header>
        <div className="mb-8">
          <div>
            {user?.firstName} {user?.lastName}
          </div>
          <div>{user?.email}</div>
        </div>
        <DashboardNav isModal={false} />
      </aside>
      <div className="w-full h-full border-2 border-blue-600">{content}</div>
    </div>
  );
}
