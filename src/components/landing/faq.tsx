"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are your service areas?",
    answer: "PV Plumbing proudly serves the entire metropolitan area, including surrounding suburbs. We are committed to reaching our clients promptly.",
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency plumbing and heating services. Our team is ready to assist you at any hour.",
  },
  {
    question: "How can I pay my bill?",
    answer: "We accept various payment methods, including credit cards, checks, and online payments for your convenience.",
  },
  {
    question: "Are your technicians licensed?",
    answer: "All our technicians are fully licensed, insured, and extensively trained to handle any plumbing or heating issue.",
  },
  {
    question: "What if I have a warranty issue?",
    answer: "We stand by our work. Please contact us directly to discuss any warranty-related concerns, and we will resolve them swiftly.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e8ecf1] py-[100px] md:py-[60px]" id="faq-1-v5Azpn6Qxq">
      <div className="container max-w-[1320px] mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="w-full lg:w-10/12">
            <h2 className="font-display text-[3rem] md:text-[2.25rem] font-bold text-center mb-0 leading-[1.2]">
              FAQs
            </h2>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] overflow-hidden transition-shadow duration-300"
                  style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)" }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                    aria-expanded={openIndex === index}
                  >
                    <h6 className="font-sans text-[1.25rem] font-semibold text-[#000000] m-0 leading-[1.4]">
                      {item.question}
                    </h6>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-[#232323] transition-transform duration-300 flex-shrink-0",
                        openIndex === index ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <p className="font-sans text-[1.1rem] text-[#232323] leading-[1.6] m-0">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;