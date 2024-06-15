import React from "react";
import UserButtonsComponent from "../UserButtonsComponent";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <div className="bg-background-medium-gray w-full">
      <UserButtonsComponent />
      <SearchBar />
    </div>
  );
}

export default Header;
