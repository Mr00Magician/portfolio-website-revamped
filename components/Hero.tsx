import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center preserve-3d">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fade-in">
          Anas
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-8 animate-slide-up">
          Crafting intelligent solutions at the intersection of AI and reality.
        </p>
        <div className="flex justify-center gap-6 animate-scale-in">
          <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
            <Github size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;