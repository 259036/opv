"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    };

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1030] w-full transition-all duration-300">
      <div className="container mx-auto px-4 mt-4 lg:mt-4">
        <div 
          className={`flex items-center justify-between mx-auto max-w-[1320px] transition-all duration-300 rounded-[1920px] px-[9.6px] py-[8px] bg-white/80 backdrop-blur-md shadow-[0_30px_60px_0_rgba(27,31,10,0.08)] ${
            isScrolled ? "bg-white/95" : "bg-white/80"
          }`}
          style={{ height: "90px" }}
        >
          {/* Logo & Brand */}
          <div className="flex items-center pl-4 lg:pl-0">
            <a href="#" className="flex items-center group">
              <div className="relative w-[103px] h-[68px] overflow-hidden rounded-[32px] mr-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1735875530804-d661ca2001da-1.jpeg"
                  alt="PV Plumbing Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-[19.2px] font-bold text-[#232323] transition-colors group-hover:text-primary pr-2">
                PV Plumbing
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-serif text-[19.2px] text-[#232323] px-4 py-4 rounded-[16px] hover:bg-black/5 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block pr-2">
                <a
                  href="#contact-form"
                  onClick={handleScrollToContact}
                  className="bg-[#eed36d] hover:bg-[#eec643] text-black font-serif text-[19.2px] font-semibold px-8 py-3 rounded-full transition-transform active:scale-95"
                >
                  Get Quote
                </a>
              </div>

          {/* Mobile Menu Toggler */}
          <button
            className="lg:hidden p-4 text-[#232323]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[110px] left-4 right-4 bg-white/95 backdrop-blur-lg rounded-[20px] p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-serif text-[22px] text-[#232323] p-3 text-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
                <li className="mt-4">
                  <a
                    href="#contact-form"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-[#eed36d] text-black font-serif text-[22px] font-bold py-4 rounded-full text-center shadow-lg"
                  >
                    Get Quote
                  </a>
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;