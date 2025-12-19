"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function Marquee() {
  const text = "Rapid Response Plumbing & Heating * Expert Technicians, Lasting Solutions * "
  
  return (
    <section className="py-12 bg-[#007bff] overflow-hidden whitespace-nowrap">
      <div className="flex">
        <motion.div 
          className="flex gap-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider px-4">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
