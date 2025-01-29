import React from 'react';
import { Brain, Code, Database, ScrollText } from 'lucide-react';

const Skills = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in">
            <Brain className="w-16 h-16 mb-4 text-blue-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-blue-400">Machine Learning</h3>
            <p className="text-gray-400 text-center mt-2">TensorFlow, PyTorch, Scikit-learn</p>
          </div>
          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-100">
            <Code className="w-16 h-16 mb-4 text-purple-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-purple-400">Programming</h3>
            <p className="text-gray-400 text-center mt-2">Python, C++, JavaScript</p>
          </div>
          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-200">
            <Database className="w-16 h-16 mb-4 text-blue-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-blue-400">Big Data</h3>
            <p className="text-gray-400 text-center mt-2">Spark, Hadoop, SQL</p>
          </div>
          <div className="group flex flex-col items-center p-8 bg-black/80 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in delay-300">
            <ScrollText className="w-16 h-16 mb-4 text-purple-400 group-hover:animate-float" />
            <h3 className="text-xl font-semibold text-purple-400">Research</h3>
            <p className="text-gray-400 text-center mt-2">Paper Publications, Patents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;