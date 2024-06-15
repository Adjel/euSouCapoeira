import React from "react";
import UserButtonsComponent from "../UserButtonsComponent";
import SearchBar from "../SearchBar";
import MenuButton from "../MenuButton";
import BrandTitleComponent from "../BrandTitleComponent";

function Header() {
  return (
    <div className="basics py-3 bg-background-medium-gray w-full">
      <div className="flex justify-between">
        <BrandTitleComponent />
        <UserButtonsComponent />
      </div>
      <div className=" flex gap-7">
        <SearchBar />
        <MenuButton />
      </div>
    </div>
  );
}

export default Header;
