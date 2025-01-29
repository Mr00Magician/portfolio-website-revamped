import React from 'react';

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Professional Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-black/80 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-500 border border-blue-900/30 hover:border-blue-500/50 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Senior ML Engineer</h3>
            <p className="text-gray-400 mb-4">TechCorp AI • 2021 - Present</p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Led development of computer vision models for autonomous systems
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
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">ML Engineer</h3>
            <p className="text-gray-400 mb-4">AI Solutions Inc • 2019 - 2021</p>
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
  );
};

export default Experience;