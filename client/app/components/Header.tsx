import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
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
