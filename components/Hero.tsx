import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center preserve-3d">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fade-in">
          Hey, I am Anas
        </h1>
        <p className="text-xl md:text-3xl mb-8 relative animate-text-light-ray">
          A Machine Learning Engineer experienced in developing end-to-end
          software around ML.
        </p>

        <div className="flex justify-center gap-6 animate-scale-in">
          <a
            href="https://github.com/Mr00Magician"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/meanasnadeem/"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=meanasnadeem@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
