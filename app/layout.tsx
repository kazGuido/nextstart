// src/app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AuthProvider } from '@/lib/auth-context'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tulande - Bring Your Business Online',
  description: 'Tulande helps you transition your business from offline to online with ease.',
}

// Inline ClientWrapper with 'use client'
function ClientWrapper({ children }: { children: React.ReactNode }) {
  'use client'
  return (
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ClientWrapper>
      </body>
    </html>
  )
}
