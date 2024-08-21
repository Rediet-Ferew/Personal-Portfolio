import React, { useEffect, useRef } from 'react';

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Drawing function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(100, 100, 5, 0, Math.PI * 2);
      ctx.fill();

      // Draw lines
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(200, 200);
      ctx.stroke();

      // Animation
      // Example: Move dot
      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.arc(300, 300, 5, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Clean up
    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasAnimation;
