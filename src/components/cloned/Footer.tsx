"use client"

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">PV Plumbing</h3>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Leading the way in plumbing and heating excellence. Dedicated to providing top-tier service and reliable solutions for every home and business.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#007bff] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#007bff] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#007bff] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} PV Plumbing. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
