// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:flex-1 flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('path_to_your_hero_image.jpg')` }}>
        <div className="text-left p-8">
        <img src="images/josh-bw.jpg" alt="Josh Aronoff" className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto my-4 object-cover" />
          <h1 className="text-5xl">Hey there, I'm Josh!</h1>
          <p className="text-xl mt-4"> I'm a UX Designer and tech enthusiast from Pittsburgh, PA. I founded Aronoff Creative, where we help startups launch their early-stage software. Our goal? To create tools that make it easier for people to accomplish their tasks.</p>
        </div>
      </div>
      <div className="md:flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {/* Add image placeholders for your portfolio */}
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="w-full h-48 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default HeroSection;
