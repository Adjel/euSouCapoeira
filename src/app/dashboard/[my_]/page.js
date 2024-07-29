"use client";
import DashboardNav from "@/components/DashboardNav";
import { useUserStore } from "@/stores/useUserStore";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserInfoComponent from "@/components/UserInfoComponent";
import { FaPen } from "react-icons/fa";
import UserCommands from "@/components/UserCommands";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import ReturnProductComponent from "@/components/ReturnProductComponent";

export default function dashboard({ params }) {
  const { user } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

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
      content = <UserCommands />;
      break;
    case "mes_adresses":
      content = <UserInfoComponent isInfo={false} />;
      break;
    case "retour":
      content = <ReturnProductComponent />;
      break;
    default:
      content = (
        <UserInfoComponent
          isInfo={true}
          title={"Mes informations"}
          subTitle={"Mettez à jour vos informations"}
          iconButton={FaPen}
        />
      );
      break;
  }

  useEffect(() => {
    if (!user) router.push("/signin");
  }, [user]);

  return (
    <div className="relative flex flex-col md:flex-row w-full h-full gap-16 px-4 md:p-8">
      <header className="flex w-full md:hidden gap-4 h-fit items-baseline px-4 py-8 md:px-8">
        <span onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMenuAlt2 className="cursor-pointer" />
        </span>
        <span className="uppercase mt-0 p-0">espace client</span>
        <div
          className={`fixed inset-0 z-50 transition-transform duration-500 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <aside className="flex flex-col gap-6 z-50 absolute top-0 bottom-0 left-0 w-full md:w-96 lg:w-31.5 h-full p-8 bg-white shadow-lg">
            <header className="flex justify-between mb-8">
              <h2 className="w-fit text-3xl font-bold m-0 p-0">
                {user ? "Espace client" : "Connexion"}
              </h2>
              <IoCloseOutline
                className="size-12 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </header>
            {user && (
              <div>
                <div>
                  {user?.firstName} {user?.lastName}
                </div>
                <div>{user?.email}</div>
              </div>
            )}
            <DashboardNav />
          </aside>
        </div>
      </header>
      <aside className="hidden md:flex flex-col h-full">
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
