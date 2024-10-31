'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MessageCircle, ArrowRight, Check, Globe, Users, Headphones } from "lucide-react"

// Form schema
const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  domainName: z.string().min(2, {
    message: "Domain name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  whatsapp: z.string().min(10, {
    message: "Please enter a valid WhatsApp number.",
  }),
  plan: z.enum(["lite", "pro"]),
})

export default function LandingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "lite",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // TODO: Implement form submission
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold">Tulande</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#overview" className="text-sm font-medium transition-colors hover:text-primary">
                Program Overview
              </Link>
              <Link href="#signup" className="text-sm font-medium transition-colors hover:text-primary">
                Sign Up
              </Link>
              <Link href="#plans" className="text-sm font-medium transition-colors hover:text-primary">
                Lite vs. Pro Plans
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <Button className="bg-white text-[#1b2e4a] hover:bg-[#1b2e4a] hover:text-white">
            <Link href="#signup">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1b2e4a] bg-gradient-to-b from-[#1b2e4a] to-[#152238]">
        <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 rounded-b-3xl bg-[#1b2e4a] bg-gradient-to-b from-[#1b2e4a] to-[#152238] px-4 py-16 text-center md:px-6">
          {/* Decorative elements */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          
          <h1 className="mb-4 bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Bring Your Business Online with Ease!
          </h1>
          <p className="mb-12 max-w-[600px] text-xl text-blue-200 sm:text-2xl">
            Your journey from offline to online made simple and effective
          </p>
          <Button size="lg" className="bg-white text-[#1b2e4a] hover:bg-white/90">
            <Link href="#signup">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="container py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Go Online?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Globe className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Easy Setup</CardTitle>
              <CardDescription>Get your business online in minutes with our streamlined process</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Domain Selection</CardTitle>
              <CardDescription>Choose your perfect domain name and establish your online presence</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Headphones className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>24/7 Support</CardTitle>
              <CardDescription>Get help whenever you need it with our dedicated support team</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Plan Comparison */}
      <section id="plans" className="container py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Lite vs. Pro</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead>Lite Plan</TableHead>
                <TableHead>Pro Plan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Price</TableCell>
                <TableCell>Free</TableCell>
                <TableCell>Premium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Support</TableCell>
                <TableCell>WhatsApp Group</TableCell>
                <TableCell>Personalized Assistance</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Training</TableCell>
                <TableCell>Basic Guides</TableCell>
                <TableCell>Comprehensive Training</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline">Choose Lite</Button>
          <Button>Upgrade to Pro</Button>
        </div>
      </section>

      {/* Registration Form */}
      <section id="signup" className="container py-24">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-12 text-center text-3xl font-bold">Register Your Business</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="domainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Domain Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Choose your domain name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Enter your WhatsApp number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Plan</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lite">Lite Plan</SelectItem>
                        <SelectItem value="pro">Pro Plan</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Register Now</Button>
            </form>
          </Form>
        </div>
      </section>

      {/* Footer */}
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
      </footer>

      {/* WhatsApp Chat Bubble */}
      <Button
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-[#1b2e4a] p-0 text-white hover:bg-[#152238]"
        size="icon"
        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}