import React from 'react';

const ContactsMap = () => {
  return (
    <section className="bg-[#e8ecf1] py-[60px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
          {/* Contact Information Block */}
          <div className="w-full lg:w-1/3 text-left">
            <h3 className="font-display text-[2.5rem] md:text-[3rem] font-bold text-black leading-tight mb-8">
              Our<br />
              Contacts
            </h3>
            
            <div className="space-y-4 font-sans text-[1.1rem] text-[#232323] leading-relaxed">
              <p className="flex flex-col">
                <span className="font-bold">Phone:</span>
                <a href="tel:5551234567" className="hover:text-primary transition-colors">555-123-4567</a>
              </p>
              
              <p className="flex flex-col">
                <span className="font-bold">Email:</span>
                <a href="mailto:info@pvplumbing.com" className="hover:text-primary transition-colors">info@pvplumbing.com</a>
              </p>
              
              <p className="flex flex-col">
                <span className="font-bold">Address:</span>
                <span>123 Water St, Pipeville, CA 90210</span>
              </p>
              
              <p className="flex flex-col">
                <span className="font-bold">Working Hours:</span>
                <span>24/7 Emergency Service Available</span>
              </p>
            </div>
          </div>

          {/* Google Map Embedded Visual */}
          <div className="w-full lg:w-2/3">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden shadow-sm border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4276185859!2d-73.9874136845941!3d40.751025579327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a147!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1638219460000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PV Plumbing Location Map"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
              
              {/* Fake UI Overlay elements to match the screenshot exactly */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-md hidden md:block">
                <div className="text-sm font-bold text-black">350 5th Ave</div>
                <div className="text-xs text-muted-foreground mr-12 text-nowrap">350 5th Ave, New York, NY 10118, USA</div>
                <a href="#" className="text-blue-500 text-xs mt-1 block">View larger map</a>
              </div>
              
              <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-md hidden md:flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8.5v-4.5c0-.28.22-.5.5-.5h5V7.5L18 11l-4 3.5z" />
                </svg>
                <span className="text-xs font-semibold">Directions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsMap;