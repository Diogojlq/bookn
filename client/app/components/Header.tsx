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
    <nav>
      <NavigationMenu className="relative flex justify-between h-16 mx-auto" >
        <NavigationMenuList className="flex items-center">
          {headerLinks.map((link) => (
            <NavigationMenuItem key={link.name} >
              <NavigationMenuLink
                href={link.href}
                className={`${navigationMenuTriggerStyle()}`}
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
