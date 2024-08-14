import React from "react";
import { useWishlist } from "@/stores/useWishlistStore";
import { IoCloseOutline } from "react-icons/io5";
import NewWishlistButton from "../NewWishlistButton";
import WishlistTitleItem from "../WishlistTitleItem";

function WishlistMobileMenu({ wishlistTable }) {
  const { toggleMenu, setToggleMenu } = useWishlist();
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 bg-extreme-dark-gray transition-opacity duration-500 ${
          toggleMenu ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed inset-0 z-50 transition-transform duration-500 transform ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <aside className="flex flex-col gap-1 z-50 absolute top-0 bottom-0 left-0 w-full md:w-96 lg:w-31.5 h-full p-6 bg-white shadow-lg transition-transform duration-500">
          <header className="flex justify-between mb-2">
            <h2 className="w-fit text-lg font-bold m-0 p-0">
              Ma liste d'envies
            </h2>
            <IoCloseOutline
              className="size-8 cursor-pointer"
              onClick={setToggleMenu}
            />
          </header>
          <div className="flex flex-col gap-6">
            <NewWishlistButton className="h-fit" />
            {wishlistTable.map(({ isCurrent, name, idList, date }) => (
              <WishlistTitleItem
                isCurrent={isCurrent}
                name={name}
                idList={idList}
                date={date}
              />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default WishlistMobileMenu;
