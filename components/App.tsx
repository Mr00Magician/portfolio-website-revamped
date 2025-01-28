"use client";

import React, { useEffect, useRef } from "react";
import {
  Brain,
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  ScrollText,
} from "lucide-react";
import "./index.css";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      const shapes = heroRef.current.querySelectorAll(".geometric-shape");
      shapes.forEach((shape, i) => {
        const speed = 1 + i * 0.5;
        const rotateX = (y - 0.5) * 30 * speed;
        const rotateY = (x - 0.5) * 30 * speed;
        (
          shape as HTMLElement
        ).style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${
          i * 50
        }px)`;
      });

      // Update mouse position for animation frame
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const createParticles = () => {
      if (!particlesRef.current) return;
      const container = particlesRef.current;
      const particleCount = 30; // Reduced for better performance

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle animate-pulse-slow";
        particle.style.width = `${Math.random() * 200 + 50}px`; // Smaller particles
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 4}s`;

        // Store original position
        const rect = particle.getBoundingClientRect();
        particle.dataset.originalX = rect.left.toString();
        particle.dataset.originalY = rect.top.toString();

        container.appendChild(particle);
      }
    };

    const animateParticles = () => {
      if (!particlesRef.current) return;
      const particles = particlesRef.current.getElementsByClassName("particle");
      const mouseX = mousePositionRef.current.x;
      const mouseY = mousePositionRef.current.y;

      Array.from(particles).forEach((particle) => {
        const rect = (particle as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );
        const maxDistance = 1000; // Increased range of influence

        if (distance < maxDistance) {
          // Smoother attraction force
          const force = Math.pow(1 - distance / maxDistance, 2) * 100;
          const angle = Math.atan2(distanceY, distanceX);
          const moveX = Math.cos(angle) * force;
          const moveY = Math.sin(angle) * force;

          (
            particle as HTMLElement
          ).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          // Smooth return to original position
          (particle as HTMLElement).style.transform = "translate(0, 0)";
        }
      });

      requestAnimationFrame(animateParticles);
    };

    createParticles();
    window.addEventListener("mousemove", handleMouseMove);

    // Start animation loop
    const animationFrame = requestAnimationFrame(animateParticles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Interactive Background */}
      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
      >
        {/* 3D Geometric Shapes */}
        <div className="geometric-shape w-64 h-64 rounded-full top-20 -left-20" />
        <div className="geometric-shape w-96 h-96 rotate-45 top-40 -right-40" />
        <div className="geometric-shape w-72 h-72 rounded-full bottom-20 left-1/4" />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center preserve-3d">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-fade-in">
              Anas
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 animate-slide-up">
              Crafting intelligent solutions at the intersection of AI and
              reality.
            </p>
            <div className="flex justify-center gap-6 animate-scale-in">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-125 transition-all duration-300"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-black/80 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-500 border border-blue-900/30 hover:border-blue-500/50 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                Senior ML Engineer
              </h3>
              <p className="text-gray-400 mb-4">TechCorp AI • 2021 - Present</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Led development of computer vision models for autonomous
                  systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  Improved model accuracy by 35% using novel architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Managed team of 4 ML engineers
                </li>
              </ul>
            </div>
            <div className="group bg-black/80 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-500 border border-purple-900/30 hover:border-purple-500/50 animate-fade-in delay-100">
              <h3 className="text-2xl font-semibold mb-2 text-purple-400">
                ML Engineer
              </h3>
              <p className="text-gray-400 mb-4">
                AI Solutions Inc • 2019 - 2021
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  Developed NLP models for sentiment analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Reduced inference time by 40%
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  Created ML pipeline automation tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in">
              <Brain className="w-16 h-16 mb-4 text-blue-400 group-hover:animate-float" />
              <h3 className="text-xl font-semibold text-blue-400">
                Machine Learning
              </h3>
              <p className="text-gray-400 text-center mt-2">
                TensorFlow, PyTorch, Scikit-learn
              </p>
            </div>
            <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-100">
              <Code className="w-16 h-16 mb-4 text-purple-400 group-hover:animate-float" />
              <h3 className="text-xl font-semibold text-purple-400">
                Programming
              </h3>
              <p className="text-gray-400 text-center mt-2">
                Python, C++, JavaScript
              </p>
            </div>
            <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-200">
              <Database className="w-16 h-16 mb-4 text-blue-400 group-hover:animate-float" />
              <h3 className="text-xl font-semibold text-blue-400">Big Data</h3>
              <p className="text-gray-400 text-center mt-2">
                Spark, Hadoop, SQL
              </p>
            </div>
            <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-300">
              <ScrollText className="w-16 h-16 mb-4 text-purple-400 group-hover:animate-float" />
              <h3 className="text-xl font-semibold text-purple-400">
                Research
              </h3>
              <p className="text-gray-400 text-center mt-2">
                Paper Publications, Patents
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
