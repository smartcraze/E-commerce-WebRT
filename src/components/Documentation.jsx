import React from 'react';
import YouTube from 'react-youtube';

function Documentation() {
  // Style for the YouTube video container
  const videoContainerStyle = {
    maxWidth: '100%',
    marginBottom: '2rem',
  };

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-300 min-h-[89.5vh] flex flex-col justify-center items-center">
      {/* Content */}
      <div className="max-w-3xl mx-auto p-6 relative z-10 text-center text-gray-800">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Welcome to Our Online Marketplace for Local Artisans
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Our platform is dedicated to showcasing the unique creations of local artisans. 
          Here, you'll find a diverse array of handmade goods crafted with passion and 
          skill by artisans in your community.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Explore our marketplace to discover one-of-a-kind items, from handcrafted jewelry 
          to intricate pottery, vibrant textiles to beautifully carved woodwork. Each piece 
          tells a story and supports the livelihoods of talented artisans.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Whether you're looking for a special gift or seeking to adorn your home with 
          artisanal treasures, you'll find inspiration and authenticity at every turn. 
          Join us in celebrating the creativity and craftsmanship of local artisans.
        </p>

        {/* YouTube Video */}
        <div style={videoContainerStyle}>
          <YouTube videoId="H-bIrMqSrbw" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-current text-gray-300"
        >
          <path fillOpacity="1" d="M0,128L120,133.3C240,139,480,149,720,138.7C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Documentation;
