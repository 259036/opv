import React from 'react';

/**
 * CtaImmediateHelp Component
 * 
 * Clones the call-to-action section with a dark blue rounded card background,
 * white centered text asking 'Need Immediate Help?', and a contrasting yellow 'Call Now' button.
 * 
 * Theme: light (per instructions)
 * Colors: 
 * - Background: #e8ecf1 (secondary background)
 * - Card: #00305a (primary/dark blue)
 * - Text: #ffffff (white)
 * - Button: #eed36d (accent/yellow)
 */

export default function CtaImmediateHelp() {
  return (
    <section 
      className="bg-[#e8ecf1] py-[60px] md:py-[100px]"
      id="call-to-action-5-v5Azpn2aTr"
    >
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <div className={`
              bg-[#00305a] 
              rounded-[20px] 
              p-8 
              md:p-16 
              text-center 
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            `}>
              <div className="max-w-[800px] mx-auto">
                <h4 className="font-serif text-[2.5rem] md:text-[3.375rem] font-bold text-white leading-tight mb-6">
                  Need Immediate Help?
                </h4>
                
                <p className="font-sans text-[1.1rem] md:text-[1.4rem] text-white/90 leading-relaxed mb-10">
                  Don&apos;t let plumbing problems disrupt your day. Our expert team is ready 24/7 to provide fast and reliable solutions.
                </p>
                
                <div className="flex justify-center mt-8">
                  <a 
                    href="tel:5551234567"
                    className={`
                      inline-flex 
                      items-center 
                      justify-center 
                      bg-[#eed36d] 
                      text-black 
                      hover:bg-[#dfc25a] 
                      transition-colors 
                      duration-200 
                      rounded-full 
                      py-4 
                      px-10 
                      text-[1.2rem] 
                      font-semibold 
                      uppercase 
                      tracking-wide
                    `}
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}