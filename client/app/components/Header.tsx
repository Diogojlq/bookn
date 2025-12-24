"use client";

import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

import { Button } from "../../components/ui/button";

import MenuSVG from "./MenuSVG";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Register", href: "/register" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="relative">
      <NavigationMenu className="relative flex justify-between h-16 mx-auto">
        <NavigationMenuList className="flex items-center">
          <div className="hidden lg:flex">
            {headerLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink
                  href={link.href}
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>

          <Button
            className="lg:hidden text-foreground-lighter focus:ring-brand bg-transparent hover:text-foreground-light transition-colors hover:bg-overlay inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
            onClick={toggleMobileMenu}
          >
            <MenuSVG className="block w-6 h-6" />
          </Button>
        </NavigationMenuList>
      </NavigationMenu>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {headerLinks.map((link) => (
              <NavigationMenu>
                <NavigationMenuLink
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenu>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
