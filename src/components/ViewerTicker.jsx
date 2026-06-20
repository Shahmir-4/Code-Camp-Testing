import { useEffect, useState, useRef } from 'react';

// Produces a slowly-drifting fake "viewers" count between 1,000 and 10,000.
// It's randomized for atmosphere, not a real analytics feed.
function useDriftingNumber(min, max, start) {
  const [value, setValue] = useState(start);
  const valueRef = useRef(start);

  useEffect(() => {
    const id = setInterval(() => {
      const drift = Math.floor(Math.random() * 161) - 80; // -80..+80
      let next = valueRef.current + drift;
      if (next < min) next = min + Math.abs(drift);
      if (next > max) next = max - Math.abs(drift);
      valueRef.current = next;
      setValue(next);
    }, 1800);
    return () => clearInterval(id);
  }, [min, max]);

  return value;
}

export default function ViewerTicker() {
  const viewers = useDriftingNumber(1000, 10000, 2847);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink border-t border-hairline backdrop-blur-sm">
      <div className="flex items-center gap-3 px-4 py-2.5 sm:px-6">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
        </span>
        <p className="font-mono text-xs sm:text-sm text-ash tracking-tight whitespace-nowrap overflow-hidden">
          <span className="text-paper font-semibold tabular-nums">
            {viewers.toLocaleString()}
          </span>{' '}
          people viewing this page right now
        </p>
      </div>
    </div>
  );
}
