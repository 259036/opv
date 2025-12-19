"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are your service areas?",
    answer: "PV Plumbing proudly serves the entire metropolitan area, including surrounding suburbs. We are committed to reaching our clients promptly."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency plumbing and heating services. Our team is ready to assist you at any hour."
  },
  {
    question: "How can I pay my bill?",
    answer: "We accept various payment methods, including credit cards, checks, and online payments for your convenience."
  },
  {
    question: "Are your technicians licensed?",
    answer: "All our technicians are fully licensed, insured, and extensively trained to handle any plumbing or heating issue."
  },
  {
    question: "What if I have a warranty issue?",
    answer: "We stand by our work. Please contact us directly to discuss any warranty-related concerns, and we will resolve them swiftly."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          FAQs
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-zinc-100 py-2">
              <AccordionTrigger className="text-xl font-semibold text-left hover:no-underline hover:text-blue-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 text-lg pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
