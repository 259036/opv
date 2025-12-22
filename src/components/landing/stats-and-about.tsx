import React from 'react';
import Image from 'next/image';

const StatsAndAbout = () => {
  return (
    <div className="bg-white">
      {/* Hero Image Section */}
      <section className="w-full">
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1753947686751-c77068e043ec-15.jpeg"
            alt="Professional precision screwdriver tool"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <h2 className="text-[#eed36d] font-display text-[3rem] md:text-[4rem] font-bold mb-2 leading-none">
                1500+
              </h2>
              <p className="text-[#000000] font-sans text-[1.25rem] font-bold">
                Happy Clients
              </p>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <h2 className="text-[#eed36d] font-display text-[3rem] md:text-[4rem] font-bold mb-2 leading-none">
                20+
              </h2>
              <p className="text-[#000000] font-sans text-[1.25rem] font-bold">
                Years Experience
              </p>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <h2 className="text-[#eed36d] font-display text-[3rem] md:text-[4rem] font-bold mb-2 leading-none">
                99%
              </h2>
              <p className="text-[#000000] font-sans text-[1.25rem] font-bold">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pb-24 pt-10 bg-white">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="text-center md:text-left">
            <h2 className="text-[#000000] font-display text-[2.5rem] md:text-[3rem] font-bold mb-8 text-center">
              PV Plumbing: Your Trusted Pros
            </h2>
            
            <div className="space-y-6 text-[#232323] font-sans text-[1.1rem] leading-[1.6]">
              <p>
                Founded in 2010 by industry veterans, Maria and Carlos Garcia, PV Plumbing was born from a shared passion for providing reliable and high-quality plumbing solutions. We saw a need for a service that prioritized customer satisfaction and technical expertise, and we set out to build a company that exceeded expectations.
              </p>
              
              <p>
                Our mission is to be the premier plumbing and heating service in the region, known for our integrity, skill, and commitment to our community. We operate with core values of honesty, transparency, and a dedication to craftsmanship in every job we undertake.
              </p>
              
              <p>
                Meet our team! Led by Maria and Carlos, our certified plumbers, including the ever-reliable David Chen and the meticulous Sarah Jenkins, are equipped with the latest tools and knowledge. We&apos;re not just a business; we&apos;re your neighbors, deeply invested in the well-being of our community through prompt service and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsAndAbout;