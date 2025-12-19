"use client"

import React from 'react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover scale-[1.5]"
          src="https://www.youtube.com/embed/ezTywV-LZLU?autoplay=1&mute=1&loop=1&playlist=ezTywV-LZLU&controls=0&showinfo=0&rel=0"
          title="PV Plumbing Hero Video"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          PV Plumbing
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Your trusted partner for all plumbing and heating needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-lg">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
