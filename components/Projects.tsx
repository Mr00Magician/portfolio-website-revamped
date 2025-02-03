import React from "react";
import { Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Mining Mitra – Smart India Hackathon",
      description:
        "A prototype for a specialised chatbot catered for the coal mining industry of India, as part of Smart India Hackathon.",
      tags: [
        "LLaMA 2",
        "LangChain",
        "FAISS",
        "Universal Sentence Encoder",
        "Hugging Face",
        "Python",
      ],
      image: `/mining-mitra.png`,
      href: "https://github.com/abdullahnizami77/NLP-Miners",
    },
    {
      title: "Number Recogniser",
      description:
        "A Web Application (deployed on GCP) that utilizes a Convolutional Neural Network to recognise Handwritten Numbers (comprising multiple digits)",
      tags: [
        "React",
        "Flask",
        "Google Cloud",
        "TensorFlow",
        "OpenCV",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      image: "/number-recogniser.png",
      href: "https://github.com/Mr00Magician/Number-Recogniser",
    },
    {
      title: "Virtual Mouse",
      description:
        "Developed using OpenCV and Mediapipe, this app allows you to use your computer without a physical mouse by allowing you to perform basic mouse operations by using certain hand gestures and movements in front of your webcam.",
      tags: ["OpenCV", "Mediapipe", "Pillow", "Python"],
      image: "/virtual-mouse.png",
      href: "https://github.com/Mr00Magician/Virtual-Mouse",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/80 rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-blue-900/30 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {/* <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
