import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const FallingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = (): Star => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    });

    const maxStars = 20;
    let animationFrameId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Tambah bintang baru setiap 60 frame (sekitar 1 detik pada 60fps)
      if (frameCount % 60 === 0 && stars.length < maxStars) {
        setStars(prevStars => [...prevStars, createStar()]);
      }

      // Update posisi bintang
      setStars(prevStars => 
        prevStars
          .map(star => ({
            ...star,
            y: star.y + star.speed,
            opacity: star.y > window.innerHeight * 0.8 ? star.opacity * 0.95 : star.opacity
          }))
          .filter(star => star.y < window.innerHeight && star.opacity > 0.1)
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingStars;