import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:contact@tulande.com" className="text-sm text-muted-foreground hover:text-primary">
                  contact@tulande.com
                </Link>
              </li>
              <li>
                <Link href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                  +123 456 7890
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Button
          className="h-12 w-12 rounded-full bg-[#1b2e4a] p-0 text-white hover:bg-[#152238]"
          size="icon"
          asChild
        >
          <Link href="https://wa.me/+8618834867478" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Contact us on WhatsApp</span>
          </Link>
        </Button>
      </div>
    </footer>
  )
}