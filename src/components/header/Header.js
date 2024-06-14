import React from "react";
import UserButtonsComponent from "../UserButtonsComponent";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <div>
      <UserButtonsComponent />
      <SearchBar />
    </div>
  );
}

export default Header;
