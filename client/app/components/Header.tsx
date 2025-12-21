import { NavigationMenuList } from "../../components/ui/navigation-menu.tsx";
import { NavigationMenu } from "../../components/ui/navigation-menu";
import { NavigationMenuTrigger } from "../../components/ui/navigation-menu";
import { NavigationMenuItem } from "../../components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </ NavigationMenu>
  )
}
