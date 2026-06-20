import Reveal from './Reveal';

const pillars = [
  {
    title: 'Project-first',
    body: "You're not watching tutorials. Every week ends with something working — a page, a feature, an app — that you built.",
  },
  {
    title: 'Live mentorship',
    body: 'Small group sessions with working developers who review your code and unblock you the same day, not next week.',
  },
  {
    title: 'Portfolio-ready',
    body: 'You leave with a finished project you can show in interviews, not just a certificate that says you attended.',
  },
];

export default function Program() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3">// what you're signing up for</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper max-w-2xl leading-tight">
          A camp built around shipping, not sitting through slides.
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-3 gap-px bg-hairline">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="bg-ink p-7 sm:p-8 h-full">
              <h3 className="font-mono text-lg font-semibold text-paper mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-ash leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
