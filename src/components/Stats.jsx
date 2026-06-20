import Reveal from './Reveal';

const stats = [
  { value: '4', label: 'weeks, start to capstone' },
  { value: '8', label: 'live sessions total' },
  { value: '16', label: 'hrs of live instruction' },
  { value: '3', label: 'cohort dates to choose from' },
];

export default function Stats() {
  return (
    <section className="border-y border-hairline">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-y-0 divide-hairline sm:divide-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div
              className={`px-6 py-8 text-center sm:text-left h-full ${
                i < 2 ? 'border-b sm:border-b-0 border-hairline' : ''
              } ${i % 2 === 0 ? 'border-r border-hairline sm:border-r-0' : ''} ${
                i !== 3 ? 'sm:border-r sm:border-hairline' : ''
              }`}
            >
              <div className="font-mono text-3xl sm:text-4xl font-bold text-lime">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-ash">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
