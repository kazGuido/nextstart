import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
            <span className="text-xl font-bold">Tulande</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/#overview" className="text-sm font-medium transition-colors hover:text-primary">
              Program Overview
            </Link>
            <Link href="/#signup" className="text-sm font-medium transition-colors hover:text-primary">
              Sign Up
            </Link>
            <Link href="/#plans" className="text-sm font-medium transition-colors hover:text-primary">
              Lite vs. Pro Plans
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-white text-[#1b2e4a] hover:bg-[#1b2e4a] hover:text-white" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-white text-[#1b2e4a] hover:bg-[#1b2e4a] hover:text-white" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}