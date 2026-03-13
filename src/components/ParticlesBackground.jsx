import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: ['#4F46E5', '#6366F1', '#D1D5DB'] },
          links: {
            color: '#4F46E5',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            outModes: { default: 'out' },
          },
          number: {
            value: 50,
            density: { enable: true, area: 900 },
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
            animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.2 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
