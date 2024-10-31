import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tulande - Bring Your Business Online',
  description: 'Tulande helps you transition your business from offline to online with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-4 py-8 sm:px-6 md:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}