"use client";
import DashboardNav from "@/components/DashboardNav";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserInfoComponent from "@/components/UserInfoComponent";
import { FaPen } from "react-icons/fa";

export default function dashboard({ params }) {
  const { user } = useUserStore();

  const my_ = params.my_;
  const router = useRouter();

  let content = null;
  switch (my_) {
    case "mes_informations":
      content = (
        <UserInfoComponent
          isInfo={true}
          title={"Mes informations"}
          subTitle={"Mettez à jour vos informations"}
          iconButton={FaPen}
        />
      );
      break;
    case "mes_commandes":
      content = <div>Contenu 2</div>;
      break;
    case "mes_adresses":
      content = <UserInfoComponent isInfo={false} />;
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
    <div className="flex w-full h-full gap-16 p-8">
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
      <div className="w-full h-full">{content}</div>
    </div>
  );
}
