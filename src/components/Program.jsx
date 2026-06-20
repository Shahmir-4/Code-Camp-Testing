import Reveal from './Reveal';

const outcomes = [
  {
    title: 'Admissions advantage',
    body: 'Position your child as a future innovator - exactly what top universities are screening for beyond grades.',
  },
  {
    title: 'Real-world application',
    body: 'Projects they can showcase in essays, interviews, and competitions, not just a certificate that says they attended.',
  },
  {
    title: 'Career-ready skills',
    body: 'The same tools financial analysts, data scientists, and AI engineers use every day.',
  },
];

export default function Program() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3">// why this camp</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper max-w-2xl leading-tight">
          Building digital proficiency: coding, Excel &amp; AI.
        </h2>
        <p className="mt-5 text-ash max-w-2xl leading-relaxed">
          Top universities like LUMS, Harvard, Yale, and MIT aren&apos;t just
          looking at grades anymore - they want students who can code,
          analyze data, and think critically about technology and
          operations. This camp is designed to give your child that
          competitive edge in both admissions and future careers.
        </p>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-3 gap-px bg-hairline">
        {outcomes.map((p, i) => (
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
