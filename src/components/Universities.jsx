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

function LogoRow({ ariaHidden = false }) {
  return (
    <div className="flex items-center shrink-0" aria-hidden={ariaHidden}>
      {universities.map((u) => (
        <div
          key={u.name}
          className="flex items-center justify-center px-10 sm:px-14"
        >
          <img
            src={`/logos/${u.file}`}
            alt={ariaHidden ? '' : `${u.name} logo`}
            style={{ height: '48px', width: 'auto' }}
            className="object-contain opacity-80"
          />
        </div>
      ))}
    </div>
  );
}

export default function Universities() {
  return (
    <section className="py-16 sm:py-20">
      <Reveal>
        <p className="text-center font-mono text-xs sm:text-sm text-ash mb-10 px-5">
          What top universities are looking for, your child builds here
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative overflow-hidden" style={{ height: '120px' }}>
          {/* Fade the belt out at both edges so logos don't pop in/out abruptly */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, var(--color-ink) 0%, transparent 12%, transparent 88%, var(--color-ink) 100%)',
            }}
          />

          {/* The belt itself: two copies back to back, scrolling right-to-left on a loop */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-marquee">
              <LogoRow />
              <LogoRow ariaHidden />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
