import React from "react";

const Experience = () => {
  return (
    <section className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="group bg-black/80 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-500 border border-blue-900/30 hover:border-blue-500/50 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">
              Software Development Engineer - Machine Learning
            </h3>
            <p className="text-gray-400 mb-4">
              Plutomoney • Feb, 2024 - Present
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Developed and deployed an advanced chatbot that acts as a
                Personalized Financial Planner which can perform tasks such as
                Portfolio Diversification, Stocks Analysis, Retirement Planning,
                General Q&A about Finance.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                The bot uses state-of-the-art techniques such as Agentic RAG,
                Function calling for LLMs and efficient prompt engineering to
                provide optimal response.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                In addition to getting data from a vector db (Mongodb Atlas),
                the bot can also perform Online Web Search to acquire data, when
                a user’s query cannot be answered using data from vector db.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Implemented a hands-free speech-to-speech feature in the chatbot
                with a response latency of merely 2 seconds. The audio is
                streamed between client and backend using Web Socket.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Designed the front-end using Next.js (deployed on AWS EC2) and
                the back-end using FastAPI (deployed on AWS Elastic Beanstalk).
                The front-end includes a sitemap and leverages SSR for improving
                SEO.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Tech Stack used: AWS, FastAPI, Langchain, Sentence Transformers,
                OpenAI, MongoDB Atlas, ElevenLabs (for STT), Deepgram (for TTS),
                Python, HTML, CSS, Javascript, NextJS, Puppeteer, Selenium,
                Beautiful soup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
