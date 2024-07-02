"use client";
import DashboardNav from "@/components/DashboardNav";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect } from "react";

export default function dashboard() {
  const { user } = useUserStore();

  useEffect(() => {
    // if (!user) go home
  }, [user]);

  return (
    <div className="flex w-full h-full gap-16 p-8">
      <aside className="">
        <header className="flex justify-between mb-8">
          <h2 className="w-fit text-3xl font-bold m-0 p-0">Espace client</h2>
        </header>
        <div>
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
        <div className="w-full h-full border-2 border-blue-600"></div>
      </div>
    </div>
  );
}
