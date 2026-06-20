import { useState } from 'react';
import Reveal from './Reveal';

// 👉 Paste the Web App URL you get from deploying the Google Apps Script here.
// See SETUP.md in the project root for the exact steps.
const FORM_ENDPOINT = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

export default function Signup() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [values, setValues] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim()) return;

    setStatus('loading');
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // Apps Script web apps don't return CORS headers; no-cors lets the request fire
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="signup" className="px-5 sm:px-8 py-20 sm:py-28 max-w-2xl mx-auto text-center">
        <Reveal>
          <div className="border border-lime/40 bg-lime/5 p-10 sm:p-14">
            <div className="font-mono text-4xl text-lime mb-4">✓</div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-paper">
              You're on the list.
            </h2>
            <p className="mt-3 text-ash text-sm sm:text-base">
              Check your inbox at <span className="text-paper">{values.email}</span> - we'll
              send your cohort details within 24 hours.
            </p>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="signup" className="px-5 sm:px-8 py-20 sm:py-28 max-w-2xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs sm:text-sm text-lime mb-3 text-center">// reserve your seat</p>
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-paper text-center leading-tight">
          Takes 20 seconds.
        </h2>
        <p className="mt-3 text-ash text-center text-sm sm:text-base">
          Just your name and email - we'll handle the rest.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-hairline focus:border-lime outline-none px-5 py-4 text-base text-paper placeholder:text-ash transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              value={values.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-hairline focus:border-lime outline-none px-5 py-4 text-base text-paper placeholder:text-ash transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">Phone number (optional)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Phone number (optional)"
              value={values.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-hairline focus:border-lime outline-none px-5 py-4 text-base text-paper placeholder:text-ash transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full font-mono font-semibold text-sm sm:text-base px-7 py-4 bg-lime text-ink hover:bg-paper transition-colors duration-200 disabled:opacity-60"
          >
            {status === 'loading' ? 'Submitting…' : 'Reserve my seat →'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-center text-red-400">
              Something went wrong. Please try again in a moment.
            </p>
          )}

          <p className="text-xs text-ash text-center pt-1">
            No payment now. We'll reach out to confirm your spot first.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
