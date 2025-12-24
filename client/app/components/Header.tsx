import { NavigationMenuList } from "../../components/ui/navigation-menu.tsx";
import { NavigationMenu } from "../../components/ui/navigation-menu";
import { NavigationMenuLink } from "../../components/ui/navigation-menu";
import { NavigationMenuItem } from "../../components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu className="max-w-full w-full justify-center">
      <NavigationMenuList className="flex gap-2">

        <NavigationMenuItem>
          <NavigationMenuLink href="/">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/about">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>
            Register
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
