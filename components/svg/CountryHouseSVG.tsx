import React from "react";

export default function CountryHouseSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Main house body */}
      <rect x="14" y="52" width="72" height="42" rx="1" />

      {/* Pitched roof */}
      <path d="M8 54 L50 14 L92 54 Z" />

      {/* Roof overhang detail */}
      <rect x="6" y="52" width="88" height="4" rx="1" />

      {/* Chimney */}
      <rect x="62" y="20" width="10" height="20" rx="1" />
      {/* Chimney cap */}
      <rect x="60" y="18" width="14" height="4" rx="1" />
      {/* Smoke puffs */}
      <circle cx="65" cy="13" r="3" />
      <circle cx="70" cy="9" r="2.5" />
      <circle cx="67" cy="5" r="2" />

      {/* Front door */}
      <path
        fillRule="evenodd"
        d="
          M41 94 L41 68 Q41 62 50 62 Q59 62 59 68 L59 94 Z
          M43 94 L43 69 Q43 64 50 64 Q57 64 57 69 L57 94 Z
        "
      />

      {/* Door knob */}
      <circle cx="56" cy="79" r="1.5" />

      {/* Left window */}
      <path
        fillRule="evenodd"
        d="
          M18 72 L18 60 Q18 58 20 58 L34 58 Q36 58 36 60 L36 72 Q36 74 34 74 L20 74 Q18 74 18 72 Z
          M20 72 L20 60 L34 60 L34 72 Z
        "
      />
      {/* Left window cross panes */}
      <rect x="18" y="65" width="18" height="1.5" />
      <rect x="26" y="58" width="1.5" height="16" />

      {/* Right window */}
      <path
        fillRule="evenodd"
        d="
          M64 72 L64 60 Q64 58 66 58 L80 58 Q82 58 82 60 L82 72 Q82 74 80 74 L66 74 Q64 74 64 72 Z
          M66 72 L66 60 L80 60 L80 72 Z
        "
      />
      {/* Right window cross panes */}
      <rect x="64" y="65" width="18" height="1.5" />
      <rect x="72" y="58" width="1.5" height="16" />

      {/* Attic/gable window */}
      <path
        fillRule="evenodd"
        d="
          M44 44 L50 36 L56 44 Z
          M45.5 43.5 L50 37.5 L54.5 43.5 Z
        "
      />

      {/* Ground / foundation line */}
      <rect x="10" y="93" width="80" height="3" rx="1" />

      {/* Fence posts left */}
      <rect x="4" y="80" width="3" height="14" rx="1" />
      <rect x="10" y="80" width="3" height="14" rx="1" />
      {/* Fence rail left */}
      <rect x="4" y="84" width="10" height="2" rx="1" />
      <rect x="4" y="89" width="10" height="2" rx="1" />

      {/* Fence posts right */}
      <rect x="83" y="80" width="3" height="14" rx="1" />
      <rect x="89" y="80" width="3" height="14" rx="1" />
      {/* Fence rail right */}
      <rect x="83" y="84" width="10" height="2" rx="1" />
      <rect x="83" y="89" width="10" height="2" rx="1" />

      {/* Porch step */}
      <rect x="36" y="91" width="28" height="3" rx="1" />
    </svg>
  );
}
