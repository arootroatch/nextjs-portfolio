import React from "react";

export default function GuitarSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Headstock - shaped with curves, not a rectangle */}
      <path d="M118 8 C114 8 110 10 109 14 L107 32 C107 35 109 37 112 38 L112 44 L114 44 L114 38 L118 38 L118 44 L120 44 L120 38 L124 38 L124 44 L126 44 L126 38 L130 38 L130 44 L132 44 L132 38 C135 37 137 35 137 32 L135 14 C134 10 130 8 126 8 Z" />

      {/* Nut */}
      <rect x="112" y="44" width="32" height="5" rx="2" />

      {/* Tuning pegs - left side, 3 pegs */}
      <ellipse cx="100" cy="16" rx="9" ry="6" />
      <rect x="107" y="13" width="5" height="6" rx="2" />
      <ellipse cx="100" cy="24" rx="9" ry="6" />
      <rect x="107" y="21" width="5" height="6" rx="2" />
      <ellipse cx="100" cy="32" rx="9" ry="6" />
      <rect x="107" y="29" width="5" height="6" rx="2" />

      {/* Tuning pegs - right side, 3 pegs */}
      <ellipse cx="156" cy="16" rx="9" ry="6" />
      <rect x="144" y="13" width="5" height="6" rx="2" />
      <ellipse cx="156" cy="24" rx="9" ry="6" />
      <rect x="144" y="21" width="5" height="6" rx="2" />
      <ellipse cx="156" cy="32" rx="9" ry="6" />
      <rect x="144" y="29" width="5" height="6" rx="2" />

      {/* Neck - tapered shape */}
      <path d="M114 49 C113 49 112 50 112 52 L112 118 C112 120 116 122 128 122 C140 122 144 120 144 118 L144 52 C144 50 143 49 142 49 Z" />

      {/* Fret markers - dots at positions */}
      <circle cx="128" cy="68" r="3" />
      <circle cx="128" cy="84" r="3" />
      <circle cx="128" cy="100" r="3" />
      {/* Double dot at 12th fret area */}
      <circle cx="122" cy="114" r="2.5" />
      <circle cx="134" cy="114" r="2.5" />

      {/* Fret lines - subtle horizontal bars */}
      <rect x="114" y="56" width="28" height="2" rx="0.5" />
      <rect x="114" y="63" width="28" height="2" rx="0.5" />
      <rect x="114" y="70" width="28" height="2" rx="0.5" />
      <rect x="114" y="77" width="28" height="2" rx="0.5" />
      <rect x="114" y="84" width="28" height="2" rx="0.5" />
      <rect x="114" y="91" width="28" height="2" rx="0.5" />
      <rect x="114" y="98" width="28" height="2" rx="0.5" />
      <rect x="114" y="105" width="28" height="2" rx="0.5" />
      <rect x="114" y="112" width="28" height="2" rx="0.5" />

      {/* Guitar body - upper bout, waist, lower bout with detailed curves */}
      <path
        fillRule="evenodd"
        d="
          M128 118
          C 108 118 92 126 84 138
          C 76 150 76 162 82 172
          C 86 178 92 182 96 185
          C 90 190 84 198 84 208
          C 84 230 104 248 128 248
          C 152 248 172 230 172 208
          C 172 198 166 190 160 185
          C 164 182 170 178 174 172
          C 180 162 180 150 172 138
          C 164 126 148 118 128 118 Z
          M128 174
          C 138 174 148 180 152 190
          C 156 200 150 212 140 216
          C 136 218 132 219 128 219
          C 124 219 120 218 116 216
          C 106 212 100 200 104 190
          C 108 180 118 174 128 174 Z
        "
      />

      {/* Sound hole ring detail */}
      <circle cx="128" cy="196" r="26" fillRule="nonzero" />
      <circle cx="128" cy="196" r="20" fill="none" stroke="currentColor" strokeWidth="3" />

      {/* Guitar strings - 6 strings from nut to bridge */}
      <line x1="116" y1="49" x2="116" y2="230" stroke="currentColor" strokeWidth="1.2" />
      <line x1="119" y1="49" x2="119" y2="230" stroke="currentColor" strokeWidth="1.2" />
      <line x1="123" y1="49" x2="123" y2="230" stroke="currentColor" strokeWidth="1.2" />
      <line x1="127" y1="49" x2="127" y2="230" stroke="currentColor" strokeWidth="1.2" />
      <line x1="131" y1="49" x2="131" y2="230" stroke="currentColor" strokeWidth="1.2" />
      <line x1="135" y1="49" x2="135" y2="230" stroke="currentColor" strokeWidth="1.2" />

      {/* Bridge - with saddle detail */}
      <path d="M108 226 C108 224 116 222 128 222 C140 222 148 224 148 226 L148 234 C148 236 140 238 128 238 C116 238 108 236 108 234 Z" />
      {/* Saddle */}
      <rect x="110" y="223" width="36" height="4" rx="1.5" />

      {/* Bridge pins - 6 dots */}
      <circle cx="116" cy="230" r="2" />
      <circle cx="119" cy="230" r="2" />
      <circle cx="123" cy="230" r="2" />
      <circle cx="127" cy="230" r="2" />
      <circle cx="131" cy="230" r="2" />
      <circle cx="135" cy="230" r="2" />

      {/* Strap button at bottom */}
      <circle cx="128" cy="246" r="4" />

      {/* Strap button at heel */}
      <circle cx="128" cy="122" r="3.5" />
    </svg>
  );
}
