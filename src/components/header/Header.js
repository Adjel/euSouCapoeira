import React from "react";
import UserButtonsComponent from "../UserButtonsComponent";
import SearchBar from "../SearchBar";
import MenuButton from "../MenuButton";
import BrandTitleComponent from "../BrandTitleComponent";

function Header() {
  return (
    <header className="basicPadding py-3 bg-background-medium-gray w-full w-max-1512">
      <div className="flex justify-between">
        <BrandTitleComponent />
        <UserButtonsComponent />
      </div>
      <div className=" flex gap-7">
        <SearchBar />
        <MenuButton />
      </div>
    </header>
  );
}

export default Header;
