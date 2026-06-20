import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'I have zero coding experience. Can I still join?',
    a: 'Yes — week one assumes nothing. We start from what a variable is and build up from there. Most of our campers start with no prior experience.',
  },
  {
    q: 'What if I miss a session?',
    a: "Every live session is recorded and posted within an hour. You can catch up on your own time and still ask your mentor questions async.",
  },
  {
    q: 'Do I need my own laptop?',
    a: 'Yes, a laptop (Windows, Mac, or Linux) is required. No special hardware — anything from the last 5–6 years works fine.',
  },
  {
    q: 'Is there a refund if it’s not for me?',
    a: "Yes. If you attend the first week and decide it's not a fit, we'll refund you in full — no questions asked.",
  },
  {
    q: 'What happens after I sign up?',
    a: "We'll email and message you within 24 hours to confirm your seat and share the cohort start date and onboarding steps.",
  },
];

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-hairline">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-mono text-sm sm:text-base text-paper group-hover:text-lime transition-colors">
          {item.q}
        </span>
        <span
          className={`font-mono text-lime shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-ash leading-relaxed pb-5 pr-8">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 max-w-3xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3">// before you ask</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper leading-tight">
          Common questions
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 border-t border-hairline">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
