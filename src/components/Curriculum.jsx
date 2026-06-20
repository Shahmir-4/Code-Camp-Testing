import Reveal from './Reveal';

const weeks = [
  {
    hash: 'a1f9c02',
    title: 'Foundations',
    detail:
      'Variables, logic, and how a program actually runs. You write your first 50 lines of real code.',
  },
  {
    hash: 'e3b71d4',
    title: 'Structure & Logic',
    detail:
      'Functions, loops, and breaking a big problem into small ones. First mini project, built solo.',
  },
  {
    hash: '0c44af9',
    title: 'Building for the Web',
    detail:
      'HTML, CSS, and your first interactive page. This is where "code" starts looking like a website.',
  },
  {
    hash: '7d2e615',
    title: 'Making it Dynamic',
    detail:
      'JavaScript fundamentals — events, data, and making a page respond to what a user does.',
  },
  {
    hash: 'b58a3f1',
    title: 'Connecting the Pieces',
    detail:
      'APIs and data: pulling real information into your project and rendering it on screen.',
  },
  {
    hash: 'f902cc7',
    title: 'Ship It',
    detail:
      'Polish, deploy, and present your project to the cohort and mentors. This is the one that goes in your portfolio.',
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="px-5 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3">// curriculum</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper leading-tight">
          Six weeks. Six commits.
        </h2>
        <p className="mt-4 text-ash max-w-xl">
          Think of each week as a commit to your own skillset — small,
          working, and building on the last one.
        </p>
      </Reveal>

      <div className="mt-14 border border-hairline bg-[#0d0d0c]">
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
