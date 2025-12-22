import React from 'react';
import Image from 'next/image';

const NewsBlog = () => {
  const blogPosts = [
    {
      title: "New Water Heater Install",
      date: "December 10, 2025",
      description: "See how we upgraded a client's home with an energy-efficient water heater, providing hot water on demand.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1695408248010-bce1f3767c0b-9.jpeg",
      alt: "Technician working on a water heater"
    },
    {
      title: "Fixing Leaky Faucets",
      date: "December 5, 2025",
      description: "Learn simple tips to identify and fix common faucet leaks, saving water and money.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1700887944225-f148dd124305-10.jpeg",
      alt: "Close up of plumbing blueprints or manual"
    },
    {
      title: "Boiler Maintenance Tips",
      date: "November 28, 2025",
      description: "Keep your heating system running smoothly this winter with our essential boiler maintenance advice.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1716698288651-b0b8698ea2f0-11.jpeg",
      alt: "Boiler component measurement"
    },
    {
      title: "Drain Cleaning Services",
      date: "November 20, 2025",
      description: "Understand why professional drain cleaning is important for preventing clogs and maintaining pipe health.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1695408248693-98863c4154d3-12.jpeg",
      alt: "Plumber working on exterior pipes"
    }
  ];

  return (
    <section 
      id="news-1-v5Azpn6o7l" 
      className="bg-white py-[100px] md:py-[60px]"
    >
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-10">
          <h2 className="font-display text-[48px] md:text-[36px] font-bold text-black mb-0">
            Latest From PV
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-[20px]">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-display text-[24px] md:text-[20px] font-bold text-black mb-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="font-sans text-[17.6px] text-muted-foreground mb-4">
                  {post.date}
                </p>
                
                <p className="font-sans text-[17.6px] text-[#232323] mb-6 line-clamp-3 leading-[1.6]">
                  {post.description}
                </p>

                {/* Card Button */}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-[#eed36d] text-black font-semibold text-[14.4px] px-8 py-3 rounded-full uppercase tracking-wide hover:bg-[#dec45a] transition-colors focus:ring-2 focus:ring-[#00305a] focus:ring-offset-2"
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;