import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../../components/ui/navigation-menu";

export default function Header() {
  const headerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Register", href: "/register" }
  ]

  return (
    <nav className="w-full border-b py-4">
      <NavigationMenu className="max-w-full w-full justify-center">
        <NavigationMenuList className="flex flex-col md:flex-row items-center gap-4 md:gap-2">

          {headerLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink
                href={link.href}
                className={`${navigationMenuTriggerStyle()} w-full md:w-auto text-center`}
              >
                {link.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
