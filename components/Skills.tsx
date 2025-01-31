import React from "react";
import { Brain, Cloud, Code, Layout } from "lucide-react";

const Skills = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in">
            <Brain className="w-16 h-16 mb-4 text-blue-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-blue-400">
              Technical Skills
            </h3>
            <ul className="text-gray-400 text-center mt-4 space-y-2">
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Generative AI</li>
              <li>Full Stack Development</li>
              <li>SEO</li>
              <li>CI/CD</li>
            </ul>
          </div>

          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-100">
            <Code className="w-16 h-16 mb-4 text-purple-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-purple-400">Languages</h3>
            <ul className="text-gray-400 text-center mt-4 space-y-2">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C++</li>
              <li>Java</li>
              <li>C</li>
            </ul>
          </div>

          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-200">
            <Cloud className="w-16 h-16 mb-4 text-blue-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-blue-400">
              Cloud Platforms
            </h3>
            <ul className="text-gray-400 text-center mt-4 space-y-2">
              <li>Amazon Web Services</li>
              <li>Vercel</li>
              <li>Redis Cloud</li>
              <li>MongoDB Atlas</li>
              <li>Hugging Face</li>
            </ul>
          </div>

          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-300">
            <Layout className="w-16 h-16 mb-4 text-purple-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-purple-400">
              Frameworks
            </h3>
            <ul className="text-gray-400 text-center mt-4 space-y-2">
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>Flask</li>
              <li>FastAPI</li>
              <li>Tensorflow</li>
              <li>Pandas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
