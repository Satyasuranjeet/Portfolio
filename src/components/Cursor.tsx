import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });
  
  const ringX = useSpring(0, { stiffness: 200, damping: 40 });
  const ringY = useSpring(0, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [dotX, dotY, ringX, ringY]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] hidden md:block ${isHovering ? 'cursor-hover' : ''}`}>
      <motion.div
        className="custom-cursor"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{ x: ringX, y: ringY }}
      />
    </div>
  );
}
