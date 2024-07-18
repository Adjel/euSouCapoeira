"use client";
import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useMobileNavStore } from "@/stores/useNavStore";
import Link from "next/link";
import "@/styles/globals.css";

function MobileNav() {
  const { isOpen, close } = useMobileNavStore();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const liStyle = "cursor-pointer hover:text-color-gold";
  const linkStyle = "w-fit text-xl font-bold m-0 p-0";
  const textStyle = "first-letter:uppercase";

  const LinkComponent = ({ title, link }) => {
    return (
      <Link
        href={`/categories/${link}`}
        className={`${linkStyle}`}
        onClick={close}
      >
        <div className={textStyle}>{title}</div>
      </Link>
    );
  };

  const Links = () => {
    return (
      <ul className="flex flex-col h-full justify-center gap-16">
        <li className={liStyle}>
          <LinkComponent link={"vetements"} title={"Vêtements"} />
        </li>
        <li className={liStyle}>
          <LinkComponent link={"Entrainements"} title={"Entraînements"} />
        </li>
        <li className={liStyle}>
          <LinkComponent link={"Instruments"} title={"Instruments"} />
        </li>
        <li className={liStyle}>
          <LinkComponent link={"esoterisme"} title={"ésotérisme"} />
        </li>
        <li className={liStyle}>
          <LinkComponent link={"livre"} title={"livres"} />
        </li>
      </ul>
    );
  };

  return (
    <div>
      <div
        className={`fixed inset-0 z-50 bg-extreme-dark-gray transition-opacity duration-500 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed inset-0 z-50 transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <aside className="flex flex-col gap-6 z-50 absolute top-0 bottom-0 left-0 w-full md:w-96 lg:w-31.5 h-full p-8 bg-white shadow-lg transition-transform duration-500">
          <header className="flex justify-between mb-8">
            <h2 className="w-fit text-3xl font-bold m-0 p-0">Nos Catégories</h2>
            <IoCloseOutline
              className="size-12 cursor-pointer"
              onClick={close}
            />
          </header>
          <Links />
        </aside>
      </div>
    </div>
  );
}

export default MobileNav;
