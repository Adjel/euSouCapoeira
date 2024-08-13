import React from "react";

function WishlistMobileMenu() {
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

export default WishlistMobileMenu;
