import React, { useEffect, useRef } from 'react';
import { spawnConfettiBurst } from '../utils/confettiHelper';
import '../styles/confetti.css';

export default function Confetti({ count = 85 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanup = spawnConfettiBurst(containerRef.current, count);

    // Auto cleanup after maximum animation duration (5.5s)
    const timer = setTimeout(() => {
      cleanup();
    }, 5500);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [count]);

  return <div ref={containerRef} className="confetti-container" aria-hidden="true" />;
}
