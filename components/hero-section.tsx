import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#1b2e4a] bg-gradient-to-b from-[#1b2e4a] to-[#152238]">
      <header className="flex items-center justify-between px-6 py-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                href="#"
              >
                Menu 1
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                href="#"
              >
                Menu 2
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                href="#"
              >
                Menu 3
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-white text-[#1b2e4a] hover:bg-white/90">Start</Button>
      </header>
      <main className="container relative">
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        
        <div className="relative flex flex-col items-center text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Tulande Offline2Online
          </h1>
          <p className="mb-12 text-xl text-blue-200 sm:text-2xl">
            Bring your business online
          </p>
          <div className="grid gap-6 text-left text-lg sm:text-xl md:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                <ArrowRight className="h-5 w-5 text-blue-200" />
              </div>
              <span className="text-white">Extend your reach!</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                <ArrowRight className="h-5 w-5 text-blue-200" />
              </div>
              <span className="text-white">Increase your revenue</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                <ArrowRight className="h-5 w-5 text-blue-200" />
              </div>
              <span className="text-white">Modernize your business</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}