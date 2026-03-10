import React from "react";

export default function DogSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Sitting dog silhouette */}

      {/* Head */}
      <ellipse cx="50" cy="28" rx="16" ry="15" />

      {/* Left ear - floppy */}
      <path d="M35 20 Q26 14 24 26 Q22 34 30 36 Q34 30 36 26 Z" />

      {/* Right ear - floppy */}
      <path d="M65 20 Q74 14 76 26 Q78 34 70 36 Q66 30 64 26 Z" />

      {/* Snout */}
      <ellipse cx="50" cy="36" rx="9" ry="7" />

      {/* Nose */}
      <ellipse cx="50" cy="33" rx="4" ry="3" />

      {/* Eyes - as small cutouts/features */}
      <circle cx="43" cy="25" r="2.5" />
      <circle cx="57" cy="25" r="2.5" />

      {/* Eye shine dots - lighter */}
      <circle cx="44" cy="24" r="1" fill="currentColor" />
      <circle cx="58" cy="24" r="1" fill="currentColor" />

      {/* Neck / collar area */}
      <path d="M36 40 Q34 44 34 48 L66 48 Q66 44 64 40 Q57 43 50 43 Q43 43 36 40 Z" />

      {/* Collar band */}
      <rect x="34" y="44" width="32" height="5" rx="2" />

      {/* Collar tag */}
      <circle cx="50" cy="52" r="3" />

      {/* Body - torso sitting */}
      <path d="M30 56 Q28 60 28 70 Q28 82 34 84 L66 84 Q72 82 72 70 Q72 60 70 56 L34 56 Z" />

      {/* Front left leg */}
      <rect x="32" y="72" width="10" height="22" rx="5" />
      {/* Front right leg */}
      <rect x="58" y="72" width="10" height="22" rx="5" />

      {/* Paw left */}
      <ellipse cx="37" cy="94" rx="6" ry="4" />
      {/* Paw right */}
      <ellipse cx="63" cy="94" rx="6" ry="4" />

      {/* Tail - curled up */}
      <path
        d="M68 76 Q80 72 82 64 Q84 56 78 54 Q74 52 72 56"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
