import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Nav() {
  return (
    <div className="w-full h-8 bg-black">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            Instruments
            <NavigationMenuContent>
              <NavigationMenuLink href="/category"></NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Nav;
