import Reveal from './Reveal';

export default function Pricing() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const included = [
    '4 weeks of live, mentor-led sessions',
    'Coding, Excel, and AI - all in one program',
    'Personal project review every week',
    'A capstone project for university applications',
    'Certificate of completion',
  ];

  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3">// pricing</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper leading-tight">
          One price. No hidden fees.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 border border-hairline p-7 sm:p-10 max-w-lg">
          <div className="inline-block font-mono text-xs font-semibold bg-lime text-ink px-2.5 py-1 mb-5">
            EARLY REGISTRATION DISCOUNT
          </div>

          <div className="flex items-end gap-3 flex-wrap">
            <span className="font-mono text-2xl text-ash line-through">PKR 7,500</span>
            <span className="font-mono text-5xl sm:text-6xl font-bold text-paper">
              PKR 5,000
            </span>
          </div>
          <p className="mt-2 text-sm text-ash">one-time payment - full 4-week camp</p>

          <ul className="mt-7 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-paper">
                <span className="text-lime font-mono mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={scrollToSignup}
            className="mt-8 w-full font-mono font-semibold text-sm px-7 py-3.5 bg-lime text-ink hover:bg-paper transition-colors duration-200"
          >
            Lock in this price →
          </button>
          <p className="mt-3 text-center text-xs text-ash">
            Seats limited - early registration recommended
          </p>
        </div>
      </Reveal>
    </section>
  );
}
