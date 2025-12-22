import React from 'react';

const VideoDivider = () => {
  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ minHeight: '400px', height: '600px' }}
      id="video-5-v5Azpn6BtP"
    >
      {/* Fallback Image/Preview */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/012e01a8-4abb-424e-b6fc-78f217ea432a-2116089-mobirisesite-com/assets/images/maxresdefault-14.jpg")',
          backgroundColor: '#00305a'
        }}
      />

      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        <iframe 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] min-w-full h-[56.25vw] min-h-full"
          src="https://www.youtube.com/embed/0CSH2hRYt8Y?autoplay=1&mute=1&loop=1&playlist=0CSH2hRYt8Y&controls=0&showinfo=0&rel=0&enablejsapi=1&mode=transparent" 
          allow="autoplay; fullscreen"
          title="Technician Video Background"
          style={{ border: 'none' }}
        />
      </div>

      {/* Navy Overlay (0.4 opacity as per design system) */}
      <div 
        className="absolute inset-0 z-20" 
        style={{ backgroundColor: 'rgba(0, 48, 90, 0.4)' }}
      />

      {/* Content Container (Empty as per original structure but preserved for layout consistency) */}
      <div className="container-fluid relative z-30 h-full">
        <div className="row h-full">
          <div className="col-12 h-full">
            {/* Horizontal break content space */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDivider;