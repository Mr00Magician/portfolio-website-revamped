"use client";

import ParticleBackground from "@/components/ParticleBackground";
import GeometricShapes from "@/components/GeometricShapes";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <ParticleBackground />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000">
        <GeometricShapes />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10" />
        <Hero />
      </section>

      <Experience />
      <Skills />
    </div>
  );
}

export default App;
