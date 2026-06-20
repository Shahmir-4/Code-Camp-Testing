import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-hairline' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-paper">
          <span className="text-lime">$</span> camp.init
        </span>
        <button
          onClick={scrollToSignup}
          className="font-mono text-xs sm:text-sm font-semibold px-4 py-2 bg-lime text-ink hover:bg-paper transition-colors duration-200"
        >
          Apply now
        </button>
      </div>
    </nav>
  );
}
