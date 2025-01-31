import React, { useEffect, useRef } from 'react';

const GeometricShapes = () => {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shapesRef.current) return;
      const { left, top, width, height } = shapesRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const shapes = shapesRef.current.querySelectorAll('.geometric-shape');
      shapes.forEach((shape, i) => {
        const speed = 1 + i * 0.5;
        const rotateX = (y - 0.5) * 30 * speed;
        const rotateY = (x - 0.5) * 30 * speed;
        (shape as HTMLElement).style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${i * 50}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={shapesRef}>
      <div className="geometric-shape w-64 h-64 rounded-full top-20 -left-20" />
      <div className="geometric-shape w-96 h-96 rotate-45 top-40 -right-40" />
      <div className="geometric-shape w-72 h-72 rounded-full bottom-20 left-1/4" />
    </div>
  );
};

export default GeometricShapes;