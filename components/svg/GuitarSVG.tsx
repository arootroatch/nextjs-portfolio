import React from "react";

export default function GuitarSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Headstock with tuning peg slots cut out */}
      <path
        fillRule="evenodd"
        d="
          M 82 10 C 78 10 74 14 74 18 L 72 70 C 72 74 76 78 80 78 L 120 78 C 124 78 128 74 128 70 L 126 18 C 126 14 122 10 118 10 Z
          M 80 22 L 76 22 L 76 32 L 80 32 Z
          M 80 38 L 76 38 L 76 48 L 80 48 Z
          M 80 54 L 76 54 L 76 64 L 80 64 Z
          M 120 22 L 124 22 L 124 32 L 120 32 Z
          M 120 38 L 124 38 L 124 48 L 120 48 Z
          M 120 54 L 124 54 L 124 64 L 120 64 Z
        "
      />

      {/* Tuning pegs - left */}
      <ellipse cx="64" cy="27" rx="12" ry="5" />
      <ellipse cx="64" cy="43" rx="12" ry="5" />
      <ellipse cx="64" cy="59" rx="12" ry="5" />
      {/* Tuning pegs - right */}
      <ellipse cx="136" cy="27" rx="12" ry="5" />
      <ellipse cx="136" cy="43" rx="12" ry="5" />
      <ellipse cx="136" cy="59" rx="12" ry="5" />

      {/* Nut */}
      <rect x="80" y="76" width="40" height="6" rx="1" />

      {/* Neck with fret line cutouts */}
      <path
        fillRule="evenodd"
        d="
          M 84 82 L 84 240 C 84 244 92 248 100 248 C 108 248 116 244 116 240 L 116 82 Z
          M 86 104 L 114 104 L 114 106 L 86 106 Z
          M 86 126 L 114 126 L 114 128 L 86 128 Z
          M 86 148 L 114 148 L 114 150 L 86 150 Z
          M 86 168 L 114 168 L 114 170 L 86 170 Z
          M 86 186 L 114 186 L 114 188 L 86 188 Z
          M 86 202 L 114 202 L 114 204 L 86 204 Z
          M 86 216 L 114 216 L 114 218 L 86 218 Z
          M 86 228 L 114 228 L 114 230 L 86 230 Z
        "
      />

      {/* Fret markers */}
      <circle cx="100" cy="116" r="3" />
      <circle cx="100" cy="158" r="3" />
      <circle cx="100" cy="195" r="3" />
      <circle cx="93" cy="224" r="2.5" />
      <circle cx="107" cy="224" r="2.5" />

      {/* Guitar body - upper bout (narrow), waist, lower bout (wide), sound hole cutout */}
      <path
        fillRule="evenodd"
        d="
          M 100 240
          C 72 240 50 252 42 268
          C 34 284 36 300 44 312
          C 50 320 58 324 64 328
          C 54 336 40 350 32 370
          C 22 400 40 440 100 460
          C 160 440 178 400 168 370
          C 160 350 146 336 136 328
          C 142 324 150 320 156 312
          C 164 300 166 284 158 268
          C 150 252 128 240 100 240 Z
          M 100 290 C 84 290 72 300 72 314 C 72 328 84 338 100 338 C 116 338 128 328 128 314 C 128 300 116 290 100 290 Z
        "
      />

      {/* Sound hole rosette ring */}
      <path
        fillRule="evenodd"
        d="
          M 100 294 C 88 294 78 302 78 314 C 78 326 88 334 100 334 C 112 334 122 326 122 314 C 122 302 112 294 100 294 Z
          M 100 300 C 92 300 84 306 84 314 C 84 322 92 328 100 328 C 108 328 116 322 116 314 C 116 306 108 300 100 300 Z
        "
      />

      {/* Strings - thin strokes visible against body */}
      <line x1="88" y1="82" x2="88" y2="420" stroke="currentColor" strokeWidth="1" />
      <line x1="92" y1="82" x2="93" y2="420" stroke="currentColor" strokeWidth="1" />
      <line x1="96" y1="82" x2="97" y2="420" stroke="currentColor" strokeWidth="1" />
      <line x1="104" y1="82" x2="103" y2="420" stroke="currentColor" strokeWidth="1" />
      <line x1="108" y1="82" x2="107" y2="420" stroke="currentColor" strokeWidth="1" />
      <line x1="112" y1="82" x2="112" y2="420" stroke="currentColor" strokeWidth="1" />

      {/* Bridge */}
      <rect x="78" y="408" width="44" height="8" rx="2" />
      <rect x="82" y="416" width="36" height="16" rx="3" />

      {/* Strap button */}
      <circle cx="100" cy="456" r="4" />
    </svg>
  );
}
