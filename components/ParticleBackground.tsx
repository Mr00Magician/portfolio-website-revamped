import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      const container = particlesRef.current;
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle animate-pulse-slow";
        particle.style.width = `${Math.random() * 200 + 50}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 4}s`;

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
        const maxDistance = 2000;

        if (distance < maxDistance) {
          const force = Math.pow(1 - distance / maxDistance, 2) * 100;
          const angle = Math.atan2(distanceY, distanceX);
          const moveX = Math.cos(angle) * force;
          const moveY = Math.sin(angle) * force;

          (
            particle as HTMLElement
          ).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          (particle as HTMLElement).style.transform = "translate(0, 0)";
        }
      });

      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    createParticles();
    window.addEventListener("mousemove", handleMouseMove);
    const animationFrame = requestAnimationFrame(animateParticles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    />
  );
};

export default ParticleBackground;
