import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCurriculum = () => {
    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-5 pt-24 pb-16 overflow-hidden">
      {/* faint grid background */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--color-hairline) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-ash border border-hairline px-3 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          Applications open for the next cohort
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono font-extrabold text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-paper"
        >
          Learn to build.
          <br />
          Not just to <span className="text-lime">code</span>
          <span className="cursor-blink" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-ash max-w-xl mx-auto leading-relaxed"
        >
          A 6-week coding camp that takes you from your first line of code to
          a shipped project — with a mentor checking your work every step of
          the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={scrollToSignup}
            className="w-full sm:w-auto font-mono font-semibold text-sm px-7 py-3.5 bg-lime text-ink hover:bg-paper transition-colors duration-200"
          >
            Reserve my seat →
          </button>
          <button
            onClick={scrollToCurriculum}
            className="w-full sm:w-auto font-mono text-sm px-7 py-3.5 border border-hairline text-paper hover:border-lime hover:text-lime transition-colors duration-200"
          >
            See the curriculum
          </button>
        </motion.div>
      </div>
    </section>
  );
}
