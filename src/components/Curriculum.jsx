import Reveal from './Reveal';

const cohorts = [
  { label: 'Cohort 1', dates: 'July 4 - July 26' },
  { label: 'Cohort 2', dates: 'July 18 - August 9' },
  { label: 'Cohort 3', dates: 'August 1 - August 23' },
];

const weeks = [
  {
    hash: 'a1f9c02',
    title: 'Coding in Python',
    detail:
      'Build a strong programming foundation, plus problem-solving and algorithmic thinking.',
  },
  {
    hash: 'e3b71d4',
    title: 'Excel for the Real World',
    detail:
      'From basics to advanced formulas - financial modeling and data analysis.',
  },
  {
    hash: '0c44af9',
    title: 'AI + Coding + Excel Integration',
    detail:
      'Hands-on introduction to AI, learning how to link coding and Excel with AI tools to build future-ready projects.',
  },
  {
    hash: '7d2e615',
    title: 'Data Analytics & Capstone Showcase',
    detail:
      'Dive into data visualization and extraction, and build a future-ready project that stands out on university applications.',
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="px-5 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3">// curriculum</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper leading-tight">
          Four weeks. Four commits.
        </h2>
        <p className="mt-4 text-ash max-w-xl">
          Each week is a commit to your own skillset - small, working, and
          building on the last one.
        </p>
      </Reveal>

      {/* Cohort date picker */}
      <Reveal delay={0.05}>
        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          {cohorts.map((c) => (
            <div
              key={c.label}
              className="border border-hairline px-5 py-4 hover:border-lime transition-colors duration-200"
            >
              <p className="font-mono text-xs text-lime mb-1">{c.label}</p>
              <p className="font-mono text-sm sm:text-base text-paper">{c.dates}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-ash">
          2 sessions every weekend (Saturday &amp; Sunday) - 2 hours per session.
          Pick your cohort when you sign up.
        </p>
      </Reveal>

      <div className="mt-12 border border-hairline bg-[#0d0d0c]">
        <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-hairline">
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          <span className="ml-2 font-mono text-xs text-ash">git log --oneline --reverse</span>
        </div>

        <div>
          {weeks.map((w, i) => (
            <Reveal key={w.hash} delay={i * 0.08} y={16}>
              <div className="flex gap-4 sm:gap-6 px-4 sm:px-5 py-5 sm:py-6 border-b border-hairline last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-300">
                <div className="shrink-0 pt-0.5">
                  <span className="font-mono text-xs sm:text-sm text-lime/70 group-hover:text-lime transition-colors">
                    {w.hash}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-mono text-xs text-ash">week 0{i + 1}</span>
                    <h3 className="font-mono text-base sm:text-lg font-semibold text-paper">
                      {w.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-ash leading-relaxed max-w-xl">
                    {w.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
