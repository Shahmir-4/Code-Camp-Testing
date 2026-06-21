import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

// Drop real PNG logo files into /public/logos/ using these exact filenames
// and they'll appear automatically - no code changes needed.
const universities = [
  { name: 'LUMS', file: 'lums.png' },
  { name: 'Harvard', file: 'harvard.png' },
  { name: 'Yale', file: 'yale.png' },
  { name: 'MIT', file: 'mit.png' },
  { name: 'NYU', file: 'nyu.png' },
];

const CYCLE_MS = 2200; // how long each logo stays in the spotlight

export default function Universities() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // keep the first logo spotlit, skip auto-cycling

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % universities.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  // Position of each logo relative to the currently spotlit one:
  // 0 = in the spotlight, 1 = next up (waiting, dim), 2+ = receded into the back row
  const getSlot = (i) => {
    const distance = (i - activeIndex + universities.length) % universities.length;
    return distance;
  };

  return (
    <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-center font-mono text-xs sm:text-sm text-ash mb-10">
          What top universities are looking for, your child builds here
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="relative mx-auto"
          style={{ height: '220px', maxWidth: '640px' }}
        >
          {/* Spotlight cone from the top */}
          <div
            className="absolute top-0 left-1/2 pointer-events-none"
            style={{
              width: '420px',
              height: '220px',
              transform: 'translateX(-50%)',
              background:
                'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(198,255,61,0.16), rgba(198,255,61,0.04) 45%, transparent 75%)',
            }}
          />
          {/* Light beam edges */}
          <div
            className="absolute top-0 left-1/2 pointer-events-none"
            style={{
              width: '2px',
              height: '120px',
              transform: 'translateX(-95px) skewX(8deg)',
              background:
                'linear-gradient(to bottom, rgba(198,255,61,0.35), transparent)',
            }}
          />
          <div
            className="absolute top-0 left-1/2 pointer-events-none"
            style={{
              width: '2px',
              height: '120px',
              transform: 'translateX(93px) skewX(-8deg)',
              background:
                'linear-gradient(to bottom, rgba(198,255,61,0.35), transparent)',
            }}
          />

          {/* Floor line grounding the stage */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-hairline" />

          <div className="relative" style={{ height: '160px' }}>
            {universities.map((u, i) => {
              const slot = getSlot(i);
              // Only render the spotlight logo plus the next 2 receding behind it;
              // anything further back stays fully hidden to keep the stage clean.
              if (slot > 2) return null;

              // Depth illusion: the spotlight logo sits closest to the viewer
              // (largest, lowest, brightest). Each step back moves up and
              // shrinks slightly, like it's receding into the stage.
              const configs = [
                { y: 70, scale: 1, opacity: 1, zIndex: 30, blur: 0 },
                { y: 30, scale: 0.7, opacity: 0.38, zIndex: 20, blur: 1.5 },
                { y: 6, scale: 0.5, opacity: 0.16, zIndex: 10, blur: 2.5 },
              ];
              const cfg = configs[slot];

              return (
                <motion.div
                  key={u.name}
                  className="absolute left-1/2 top-0"
                  initial={false}
                  animate={{
                    x: '-50%',
                    y: cfg.y,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    filter: `blur(${cfg.blur}px)`,
                  }}
                  style={{ zIndex: cfg.zIndex }}
                  transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      filter:
                        slot === 0
                          ? 'drop-shadow(0 0 18px rgba(198,255,61,0.35))'
                          : 'none',
                    }}
                  >
                    <img
                      src={`/logos/${u.file}`}
                      alt={`${u.name} logo`}
                      style={{ height: '64px', width: 'auto' }}
                      className="object-contain"
                    />
                  </div>
                  {slot === 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.2 }}
                      className="mt-3 text-center font-mono text-xs text-lime whitespace-nowrap"
                    >
                      {u.name}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {universities.map((u, i) => (
            <button
              key={u.name}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show ${u.name}`}
              className="p-1"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-5 h-1.5 bg-lime'
                    : 'w-1.5 h-1.5 bg-hairline'
                }`}
              />
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
