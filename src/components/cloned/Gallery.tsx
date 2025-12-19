"use client"

import React from 'react'
import Image from 'next/image'

const images = [
  "https://r.mobirisesite.com/2116089/assets/images/photo-1695408246527-cefa6c08e8c0.jpeg",
  "https://r.mobirisesite.com/2116089/assets/images/photo-1679240219409-51901fb6d2db.jpeg",
  "https://r.mobirisesite.com/2116089/assets/images/photo-1695408249017-f056cbf795e1.jpeg",
  "https://r.mobirisesite.com/2116089/assets/images/photo-1753943803347-a3c49a0817b5.jpeg"
]

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          Our Recent Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 shadow-sm transition-all hover:shadow-xl">
              <Image 
                src={img} 
                alt={`Recent work ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
