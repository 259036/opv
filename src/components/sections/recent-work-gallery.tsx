import React from 'react';
import Image from 'next/image';

const RecentWorkGallery = () => {
  const images = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1695408246527-cefa6c08e8c0-5.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1679240219409-51901fb6d2db-6.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1695408249017-f056cbf795e1-7.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/photo-1753943803347-a3c49a0817b5-8.jpeg"
  ];

  // Doubling the array to create a seamless infinite scroll effect
  const galleryItems = [...images, ...images, ...images];

  return (
    <section 
      className="bg-[#ffffff] overflow-hidden" 
      style={{ 
        paddingTop: '100px', 
        paddingBottom: '100px' 
      }}
    >
      <div className="container-fluid">
        {/* Section Header */}
        <div className="row justify-content-center mb-[48px]">
          <div className="col-12">
            <h2 className="text-center font-display font-bold mb-0 text-[3rem] md:text-[3rem] text-black">
              Our Recent Work
            </h2>
          </div>
        </div>

        {/* Scrolling Gallery Container */}
        <div className="relative w-full">
          <div className="flex animate-[infinite-scroll_40s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
            {galleryItems.map((src, index) => (
              <div 
                key={index} 
                className="inline-block px-[15px] flex-shrink-0"
                style={{ width: '400px' }}
              >
                <div className="relative w-full h-[300px] overflow-hidden rounded-[20px]">
                  <Image
                    src={src}
                    alt={`Recent work plumbing project ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkGallery;
