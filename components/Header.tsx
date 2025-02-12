"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center justify-between flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0070.JPG-MvIEhBEVlYYXNpYRFWnHT5tlBUjwB9.jpeg"
              alt="রিদুওয়ান মীর"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold sm:inline-block">রিদুওয়ান মীর</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/photos">Photos</Link>
            <Link href="/events">Events</Link>
            <Link href="/bio">Bio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/users">Users</Link>
            <Link href="/admin">Admin</Link>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/photos" className="text-sm font-medium" onClick={toggleMenu}>
              Photos
            </Link>
            <Link href="/events" className="text-sm font-medium" onClick={toggleMenu}>
              Events
            </Link>
            <Link href="/bio" className="text-sm font-medium" onClick={toggleMenu}>
              Bio
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/users" className="text-sm font-medium" onClick={toggleMenu}>
              Users
            </Link>
            <Link href="/admin" className="text-sm font-medium" onClick={toggleMenu}>
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

