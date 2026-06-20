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

export default function Universities() {
  return (
    <section className="px-5 sm:px-8 py-14 sm:py-16 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-center font-mono text-xs sm:text-sm text-ash mb-8">
          What top universities are looking for, your child builds here
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-16 gap-y-6">
          {universities.map((u) => (
            <img
              key={u.name}
              src={`/logos/${u.file}`}
              alt={`${u.name} logo`}
              style={{ height: '44px', width: 'auto' }}
              className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
