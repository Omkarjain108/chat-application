// src/components/Navbar.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>

        {/* Center Nav Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="text-gray-700 hover:text-gray-900">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <a href="/login">Login</a>
          </Button>
          <Button asChild>
            <a href="/signup">Sign Up</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
