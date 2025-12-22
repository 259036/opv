import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Twitch } from 'lucide-react';

/**
 * SocialAndContactForm Component
 * 
 * This component clones the 'Connect With Us' social icons section and the 
 * 'Get In Touch' contact form as per the pixel-perfect design requirements.
 * 
 * Theme: Light
 * Primary Color: #00305a (Navy)
 * Accent Color: #eed36d (Gold)
 * Background Secondary: #e8ecf1 (Blue-Grey)
 */

const SocialAndContactForm: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Connect With Us Section */}
      <section className="py-[100px] md:py-[60px] flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-[3rem] md:text-[2.25rem] font-bold font-display text-black mb-8 text-center">
          Connect With Us
        </h2>
        <div className="flex items-center justify-center gap-4">
          <SocialIcon href="#" icon={<Facebook size={20} />} />
          <SocialIcon href="#" icon={<XIcon />} />
          <SocialIcon href="#" icon={<Instagram size={20} />} />
          <SocialIcon href="#" icon={<Linkedin size={20} />} />
          <SocialIcon href="#" icon={<Twitch size={20} />} />
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-[100px] md:py-[60px] bg-[#e8ecf1] px-4">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-[3rem] md:text-[2.25rem] font-bold font-display text-black mb-12 text-center">
            Get In Touch
          </h2>
          <form className="max-w-[900px] mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[58px] px-6 text-[1.1rem] bg-white border-none rounded-[100px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00305a] text-[#232323] placeholder:text-[#737373]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[58px] px-6 text-[1.1rem] bg-white border-none rounded-[100px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00305a] text-[#232323] placeholder:text-[#737373]"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full h-[58px] px-6 text-[1.1rem] bg-white border-none rounded-[100px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00305a] text-[#232323] placeholder:text-[#737373]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-6 text-[1.1rem] bg-white border-none rounded-[30px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00305a] text-[#232323] placeholder:text-[#737373] resize-none"
            ></textarea>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#eed36d] hover:bg-[#e6c14d] text-black font-semibold text-[0.9rem] px-10 py-4 rounded-full transition-all duration-200 uppercase tracking-wide shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

/**
 * Sub-component for Social Icons
 */
const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a
    href={href}
    className="w-11 h-11 flex items-center justify-center rounded-full bg-[#f5f5f5] text-[#00305a] hover:bg-[#eed36d] hover:text-black transition-all duration-300 shadow-sm"
  >
    {icon}
  </a>
);

/**
 * Custom X (formerly Twitter) icon
 */
const XIcon: React.FC = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className="h-5 w-5 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default SocialAndContactForm;