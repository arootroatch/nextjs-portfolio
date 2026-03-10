import React from "react";

export default function GuitarSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Headstock */}
      <rect x="44" y="2" width="12" height="13" rx="2" />
      {/* Tuning pegs - left side */}
      <rect x="37" y="4" width="8" height="3" rx="1.5" />
      <rect x="37" y="9" width="8" height="3" rx="1.5" />
      {/* Tuning pegs - right side */}
      <rect x="55" y="4" width="8" height="3" rx="1.5" />
      <rect x="55" y="9" width="8" height="3" rx="1.5" />
      {/* Nut */}
      <rect x="44" y="14" width="12" height="2.5" rx="1" />
      {/* Neck */}
      <rect x="46" y="16" width="8" height="28" rx="1" />
      {/* Frets */}
      <rect x="46" y="19" width="8" height="1.5" rx="0.5" />
      <rect x="46" y="24" width="8" height="1.5" rx="0.5" />
      <rect x="46" y="29" width="8" height="1.5" rx="0.5" />
      <rect x="46" y="34" width="8" height="1.5" rx="0.5" />
      <rect x="46" y="39" width="8" height="1.5" rx="0.5" />

      {/* Guitar body - upper bout, waist, lower bout using single path */}
      <path
        fillRule="evenodd"
        d="
          M50 44
          C 38 44 32 50 32 57
          C 32 62 35 65 38 67
          C 35 69 33 72 33 76
          C 33 87 40 94 50 94
          C 60 94 67 87 67 76
          C 67 72 65 69 62 67
          C 65 65 68 62 68 57
          C 68 50 62 44 50 44 Z
          M50 68
          C 55 68 59 71 59 75
          C 59 79 55 82 50 82
          C 45 82 41 79 41 75
          C 41 71 45 68 50 68 Z
        "
      />

      {/* Strings */}
      <line x1="47" y1="16" x2="47" y2="60" stroke="currentColor" strokeWidth="0.8" />
      <line x1="49" y1="16" x2="49" y2="60" stroke="currentColor" strokeWidth="0.8" />
      <line x1="51" y1="16" x2="51" y2="60" stroke="currentColor" strokeWidth="0.8" />
      <line x1="53" y1="16" x2="53" y2="60" stroke="currentColor" strokeWidth="0.8" />

      {/* Bridge */}
      <rect x="44" y="84" width="12" height="3" rx="1" />
      {/* Bridge saddle */}
      <rect x="45" y="82" width="10" height="2.5" rx="1" />
    </svg>
  );
}
