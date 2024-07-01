import React from "react";
import UserButtonsComponent from "../UserButtonsComponent";
import SearchBar from "../SearchBar";
import MenuButton from "../MenuButton";
import BrandTitleComponent from "../BrandTitleComponent";
import Nav from "../Nav";
import LoginModal from "../LoginModal";

function Header() {
  return (
    <>
      <header className="relative basicPadding pt-3 pb-4 lg:px-10 lg:py-4 bg-background-medium-gray w-full w-max-1512">
        <div className="block sm:hidden">
          <div className="flex justify-between">
            <BrandTitleComponent />
            <UserButtonsComponent />
          </div>
          <div className=" flex gap-7">
            <SearchBar />
            <MenuButton />
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-end">
            <MenuButton />
            <div className="flex-col justify-items-center">
              <BrandTitleComponent />
              <SearchBar />
            </div>
            <UserButtonsComponent />
          </div>
        </div>
      </header>
      <div className="hidden lg:flex">
        <Nav />
      </div>
    </>
  );
}

export default Header;
