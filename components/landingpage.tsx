'use client'

import * as React from "react"
import Link from "next/link"
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
import { ArrowRight, Check, Globe, Users, Headphones } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col ">
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
          <Button size="lg" className="bg-white text-[#1b2e4a] hover:bg-white/90" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="container py-24 px-32">
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

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Contact Us</h2>
        <div className="mx-auto max-w-md text-center">
          <p className="mb-4">Have questions or need assistance? We're here to help!</p>
          <Button size="lg" className="w-full" asChild>
            <Link href="mailto:contact@tulande.com">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}