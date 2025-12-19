"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const testimonials = [
  {
    text: "PV Plumbing fixed my heating system quickly and professionally. Highly recommend!",
    name: "John Smith",
    role: "Homeowner",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1656338997878-279d71d48f6e.jpeg"
  },
  {
    text: "Reliable and efficient service. They resolved my plumbing issue in no time.",
    name: "Maria Garcia",
    role: "Business",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1589156191108-c762ff4b96ab.jpeg"
  },
  {
    text: "Top-notch heating repair. PV Plumbing is the best in the business.",
    name: "David Lee",
    role: "Client",
    image: "https://r.mobirisesite.com/2116089/assets/images/photo-1591084728795-1149f32d9866.jpeg"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                    <Image src={t.image} alt={t.name} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-medium text-black mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <cite className="not-italic">
                    <div className="text-xl font-bold text-black">{t.name}</div>
                    <div className="text-zinc-500">{t.role}</div>
                  </cite>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  )
}
