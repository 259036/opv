"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="https://r.mobirisesite.com/2116089/assets/images/photo-1735875530804-d661ca2001da.jpeg" 
            alt="PV Plumbing Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight text-black">PV Plumbing</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
          <Button className="bg-[#007bff] hover:bg-[#0056b3] text-white rounded-full px-6">
            Get Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 p-4 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          <Button className="bg-[#007bff] hover:bg-[#0056b3] text-white rounded-full w-full">
            Get Quote
          </Button>
        </div>
      )}
    </nav>
  )
}
