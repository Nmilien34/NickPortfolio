import { useEffect, useRef, useState } from 'react';

export function VolumetricLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [lightOpacity, setLightOpacity] = useState(1);

  useEffect(() => {
    // Initialize light position to center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    currentPos.current = { x: centerX, y: centerY };
    targetPos.current = { x: centerX, y: centerY };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Dim the light when mouse is in lower sections (non-title areas)
      // Title is roughly in the top 30% of viewport, so dim below that
      const viewportHeight = window.innerHeight;
      const titleZone = viewportHeight * 0.35; // Top 35% is the title zone

      if (e.clientY > titleZone) {
        // Mouse is below title - dim the light (0.3 = 30% opacity)
        setLightOpacity(0.3);
      } else {
        // Mouse is in title area - full brightness
        setLightOpacity(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth animation loop with lerp
    let animationFrameId: number;
    const animate = () => {
      // Lerp factor - lower = more sluggish/floaty (0.05 = very smooth)
      const lerpFactor = 0.08;

      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* The volumetric light - multiple layers for depth */}
      <div
        ref={lightRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          width: '600px',
          height: '600px',
          left: '-300px',
          top: '-300px',
          opacity: lightOpacity,
        }}
      >
        {/* Core white light */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 20%, rgba(180,200,255,0.2) 40%, rgba(100,150,255,0.05) 60%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Secondary glow layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,220,255,0.3) 30%, rgba(150,180,255,0.1) 50%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Outer atmospheric layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200,220,255,0.3) 0%, rgba(150,180,255,0.15) 40%, rgba(100,150,220,0.05) 60%, transparent 80%)',
            filter: 'blur(150px)',
          }}
        />
      </div>
    </div>
  );
}
