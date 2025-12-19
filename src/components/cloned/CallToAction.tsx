"use client"

import React from 'react'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Need Immediate Help?
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed">
          Don&apos;t let plumbing problems disrupt your day. Our expert team is ready 24/7 to provide fast and reliable solutions.
        </p>
        <Button className="bg-[#007bff] hover:bg-[#0056b3] text-white rounded-full px-10 py-7 text-xl font-semibold">
          Call Now
        </Button>
      </div>
    </section>
  )
}
