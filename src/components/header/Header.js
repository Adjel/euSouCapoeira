import React from "react";
import UserButtonsComponent from "../UserButtonsComponent";
import SearchBar from "../SearchBar";
import MenuButton from "../MenuButton";

function Header() {
  return (
    <div className="basics py-3 bg-background-medium-gray w-full">
      <UserButtonsComponent />
      <div className=" flex gap-7">
        <SearchBar />
        <MenuButton />
      </div>
    </div>
  );
}

export default Header;
