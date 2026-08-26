"use client";

import { useRef, useState } from "react";

export default function FurSlider() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);

  function updateFromClientX(clientX: number) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div className="w-full max-w-xl select-none">
      <div
        ref={trackRef}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-line"
        onMouseMove={(e) => {
          if (e.buttons === 1) updateFromClientX(e.clientX);
        }}
        onMouseDown={(e) => updateFromClientX(e.clientX)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* "before" layer — voller Fell */}
        <div className="absolute inset-0 flex items-center justify-center bg-bgAlt">
          <FurPattern density={46} />
          <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-wide text-creamMuted">
            vorher
          </span>
        </div>

        {/* "after" layer — clipped */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-surface"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <FurPattern density={4} />
          <span className="absolute bottom-4 right-4 font-mono text-xs uppercase tracking-wide text-gold">
            nachher
          </span>
        </div>

        {/* handle */}
        <div
          className="absolute top-0 h-full w-[2px] bg-gold"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-bg shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 6l-6 6 6 6M16 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-4 w-full accent-gold"
        aria-label="Vorher-Nachher-Vergleich der Fellmenge"
      />
    </div>
  );
}

function FurPattern({ density }: { density: number }) {
  const strands = Array.from({ length: density });
  return (
    <svg viewBox="0 0 200 150" className="h-full w-full">
      {strands.map((_, i) => {
        const x = (i * 37) % 200;
        const y = ((i * 53) % 150) + 5;
        const rot = (i * 29) % 40 - 20;
        return (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={x + 10}
            y2={y + 3}
            stroke="#B9C4B5"
            strokeWidth="1.4"
            strokeLinecap="round"
            transform={`rotate(${rot} ${x} ${y})`}
            opacity={0.55}
          />
        );
      })}
    </svg>
  );
}
