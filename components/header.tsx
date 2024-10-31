'use client'

import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"

export function Header() {
  const { user, logout } = useAuth()

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
            <Link href="/#plans" className="text-sm font-medium transition-colors hover:text-primary">
              Lite vs. Pro Plans
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Dashboard
              </Link>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#1b2e4a] transition-colors hover:bg-[#1b2e4a] hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#1b2e4a] transition-colors hover:bg-[#1b2e4a] hover:text-white"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}