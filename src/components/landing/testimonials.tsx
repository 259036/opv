"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testimonial Slider Section
 * Features rounded portrait images, bold serif quotes, and horizontal navigation.
 */

interface Testimonial {
  image: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1656338997878-279d71d48f6e-2.jpeg",
    quote: "PV Plumbing fixed my heating system quickly and professionally. Highly recommend!",
    author: "John Smith",
    role: "Homeowner",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1589156191108-c762ff4b96ab-3.jpeg",
    quote: "Reliable and efficient service. They resolved my plumbing issue in no time.",
    author: "Maria Garcia",
    role: "Business",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1591084728795-1149f32d9866-4.jpeg",
    quote: "Top-notch heating repair. PV Plumbing is the best in the business.",
    author: "David Lee",
    role: "Client",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play interval set to 5 seconds as per data-auto-play-interval="5"
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-white py-[60px] md:py-[100px] overflow-hidden" id="testimonials-1-v5Azpn48Cg">
      <div className="container mx-auto px-4 relative">
        <div className="relative max-w-[1320px] mx-auto">
          {/* Main Content Area */}
          <div className="flex flex-col items-center text-center">
            
            {/* Slides Container */}
            <div className="w-full transition-all duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${
                    index === activeIndex ? "block opacity-100" : "hidden opacity-0"
                  } transition-opacity duration-500`}
                >
                  <div className="mb-8 flex justify-center">
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover rounded-[20px]"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  
                  <div className="max-w-2xl mx-auto px-4">
                    <p className="font-display text-[24px] md:text-[32px] leading-[1.2] font-bold text-black mb-8 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="font-sans">
                      <h5 className="text-[19.2px] font-semibold text-black mb-1">
                        {testimonial.author}
                      </h5>
                      <p className="text-[17.6px] text-[#232323] mb-0">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center md:block">
            <button
              onClick={prevSlide}
              className="md:absolute left-0 top-1/2 md:-translate-y-1/2 z-10 p-3 mx-2 bg-[#e8ecf1] text-[#00305a] rounded-full hover:bg-[#eed36d] hover:text-black transition-colors outline-none focus:ring-2 focus:ring-[#00305a]"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextSlide}
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 z-10 p-3 mx-2 bg-[#e8ecf1] text-[#00305a] rounded-full hover:bg-[#eed36d] hover:text-black transition-colors outline-none focus:ring-2 focus:ring-[#00305a]"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#00305a] scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}