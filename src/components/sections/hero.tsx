import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden" 
      id="hero-16-v5Azpn2NgW"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#00305a]/40 z-10" /> {/* Overlay using the primary blue from design system with 0.4 opacity */}
        <div className="relative w-full h-full overflow-hidden">
          <iframe 
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full min-h-full h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/ezTywV-LZLU?autoplay=1&mute=1&loop=1&playlist=ezTywV-LZLU&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&enablejsapi=1&playsinline=1" 
            title="PV Plumbing Hero Background"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative z-20 flex justify-center text-center">
        <div className="max-w-[700px] flex flex-col items-center">
          <h1 className="font-display font-bold text-white mb-6 tracking-tight leading-[1.1] md:text-[5rem] text-[3.5rem]">
            PV Plumbing
          </h1>
          
          <p className="font-sans text-white text-[1.1rem] md:text-[1.4rem] mb-10 leading-relaxed font-normal opacity-90">
            Your trusted partner for all plumbing and heating needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#services" 
              className="inline-block px-10 py-4 font-sans font-semibold text-[0.9rem] uppercase tracking-wider text-white border-2 border-white rounded-[100px] hover:bg-white hover:text-[#00305a] transition-all duration-300 ease-in-out"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;