"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const newsItems = [
  {
    title: "New Water Heater Install",
    date: "December 10, 2025",
    description: "See how we upgraded a client's home with an energy-efficient water heater, providing hot water on demand.",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1695408248010-bce1f3767c0b.jpeg"
  },
  {
    title: "Fixing Leaky Faucets",
    date: "December 5, 2025",
    description: "Learn simple tips to identify and fix common faucet leaks, saving water and money.",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1700887944225-f148dd124305.jpeg"
  },
  {
    title: "Boiler Maintenance Tips",
    date: "November 28, 2025",
    description: "Keep your heating system running smoothly this winter with our essential boiler maintenance advice.",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1716698288651-b0b8698ea2f0.jpeg"
  },
  {
    title: "Drain Cleaning Services",
    date: "November 20, 2025",
    description: "Understand why professional drain cleaning is important for preventing clogs and maintaining pipe health.",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1695408248693-98863c4154d3.jpeg"
  }
]

export function News() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Latest From PV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <p className="text-sm text-zinc-500">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#007bff] hover:bg-[#0056b3] text-white w-full rounded-full">
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
