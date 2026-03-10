import React from "react";

export default function HandPlaneSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Main sole plate - bottom of plane */}
      <rect x="10" y="56" width="72" height="10" rx="2" />

      {/* Plane body / frog */}
      <path d="M14 56 L14 42 Q14 38 18 38 L64 38 Q68 38 68 42 L68 56 Z" />

      {/* Front knob - turned wooden knob shape */}
      <ellipse cx="25" cy="38" rx="7" ry="5" />
      <rect x="22" y="30" width="6" height="10" rx="3" />
      <ellipse cx="25" cy="30" rx="5" ry="3" />

      {/* Rear tote / handle - pistol grip shape */}
      <path d="M62 38 L62 28 Q62 22 67 20 L74 20 Q80 20 80 26 L80 38 Z" />
      {/* Tote cutout for finger grip - use evenodd */}
      <path
        fillRule="evenodd"
        d="
          M62 38 L62 28 Q62 22 67 20 L74 20 Q80 20 80 26 L80 38 Z
          M65 36 L65 29 Q65 24 68 23 L73 23 Q77 23 77 27 L77 36 Z
        "
      />

      {/* Blade / iron protruding from mouth */}
      <path d="M43 56 L47 56 L49 66 L41 66 Z" />

      {/* Cap iron */}
      <rect x="43" y="40" width="6" height="16" rx="1" />

      {/* Frog / bed angle line */}
      <line x1="40" y1="56" x2="52" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Depth adjustment knob */}
      <circle cx="36" cy="48" r="4" />
      <circle cx="36" cy="48" r="2" />

      {/* Lateral adjustment lever */}
      <rect x="56" y="38" width="3" height="14" rx="1.5" />
      <circle cx="57.5" cy="37" r="2.5" />

      {/* Wood shaving curling out from mouth */}
      <path
        d="M42 66 Q36 68 33 63 Q30 58 33 54"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
