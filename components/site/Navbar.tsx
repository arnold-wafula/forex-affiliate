"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FXAffiliates Logo"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="font-bold text-xl tracking-tight text-zinc-900">
            FXAffiliates
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-zinc-800 font-medium">
          <Link href="/" className="hover:text-zinc-500 transition-colors">Home</Link>
          <Link href="/features" className="hover:text-zinc-500 transition-colors">Features</Link>
          <Link href="/instructions" className="hover:text-zinc-500 transition-colors">Instructions</Link>
          <Link href="/strategies" className="hover:text-zinc-500 transition-colors">Strategies</Link>
          <Link href="/brokers" className="hover:text-zinc-500 transition-colors">Brokers</Link>
          <Link href="/blog" className="hover:text-zinc-500 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-zinc-500 transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <Button className="hidden md:block bg-black hover:bg-zinc-800 text-white rounded-full px-6">
          Join Now
        </Button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-zinc-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 shadow-lg">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4 text-zinc-800 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="/instructions" onClick={() => setIsOpen(false)}>Instructions</Link>
            <Link href="/strategies" onClick={() => setIsOpen(false)}>Strategies</Link>
            <Link href="/brokers" onClick={() => setIsOpen(false)}>Brokers</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button className="bg-black hover:bg-zinc-800 text-white rounded-full w-full">
              Join Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}