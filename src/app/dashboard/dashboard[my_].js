"use client";
import DashboardNav from "@/components/DashboardNav";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function dashboard() {
  const { user } = useUserStore();

  const router = useRouter();
  const { my_ } = router.query;

  let content = null;
  switch (my_) {
    case "information":
      content = <div>Contenu 1</div>;
      break;
    case "content2":
      content = <div>Contenu 2</div>;
      break;
    default:
      content = <div>Page non trouvée</div>;
      break;
  }

  useEffect(() => {
    if (!user) router.push("/");
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
      <div>
        <header className="flex flex-col">
          <h2>TITLE</h2>
          <h3>SUB TITLE</h3>
        </header>
        <div className="w-full h-full border-2 border-blue-600">{content}</div>
      </div>
    </div>
  );
}
