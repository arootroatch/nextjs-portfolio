import React from "react";

export default function HandPlaneSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 280"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Sole - the flat bottom */}
      <rect x="30" y="220" width="452" height="24" rx="4" />

      {/* Body - main casting between sole and top, with mouth cutout */}
      <path
        fillRule="evenodd"
        d="
          M 60 130 L 60 222 L 400 222 L 400 130
          C 400 124 396 120 390 120 L 70 120 C 64 120 60 124 60 130 Z
          M 230 218 L 262 218 L 262 226 L 230 226 Z
        "
      />

      {/* Blade / Iron - angled, extends from top through mouth */}
      <path d="M 248 40 L 236 40 L 218 222 L 226 240 L 260 240 L 268 222 Z" />

      {/* Chip breaker on top of blade */}
      <path d="M 246 58 L 238 58 L 224 190 L 260 190 Z" />

      {/* Lever cap - holds blade down */}
      <path
        fillRule="evenodd"
        d="
          M 222 80 L 222 180 C 222 186 228 190 236 190 L 248 190 C 256 190 262 186 262 180 L 262 80
          C 262 74 256 70 248 70 L 236 70 C 228 70 222 74 222 80 Z
          M 236 100 L 248 100 L 248 108 L 236 108 Z
        "
      />

      {/* Tote (rear handle) - pistol grip style with finger hole */}
      <path
        fillRule="evenodd"
        d="
          M 354 42
          C 348 38 340 40 336 46
          L 330 60
          C 326 68 324 78 324 88
          L 324 122
          L 420 122
          L 420 88
          C 420 72 414 56 404 46
          C 396 36 382 34 370 38
          L 354 42 Z
          M 344 64 C 340 70 338 78 338 86 L 338 108 L 406 108 L 406 86 C 406 76 402 66 396 58 C 390 52 380 48 370 50 L 354 54 C 350 56 346 60 344 64 Z
        "
      />

      {/* Front knob */}
      <ellipse cx="120" cy="118" rx="28" ry="12" />
      <path
        fillRule="evenodd"
        d="
          M 108 118 L 108 190 C 108 196 112 200 120 200 C 128 200 132 196 132 190 L 132 118 Z
          M 114 140 L 126 140 L 126 142 L 114 142 Z
          M 114 160 L 126 160 L 126 162 L 114 162 Z
        "
      />
      <ellipse cx="120" cy="200" rx="16" ry="6" />

      {/* Depth adjustment wheel */}
      <path
        fillRule="evenodd"
        d="
          M 300 146 C 286 146 274 158 274 172 C 274 186 286 198 300 198 C 314 198 326 186 326 172 C 326 158 314 146 300 146 Z
          M 300 154 C 290 154 282 162 282 172 C 282 182 290 190 300 190 C 310 190 318 182 318 172 C 318 162 310 154 300 154 Z
        "
      />
      {/* Wheel knurling marks */}
      <line x1="300" y1="146" x2="300" y2="154" stroke="currentColor" strokeWidth="2" />
      <line x1="300" y1="190" x2="300" y2="198" stroke="currentColor" strokeWidth="2" />
      <line x1="274" y1="172" x2="282" y2="172" stroke="currentColor" strokeWidth="2" />
      <line x1="318" y1="172" x2="326" y2="172" stroke="currentColor" strokeWidth="2" />

      {/* Wood shaving curling from mouth */}
      <path
        d="M 240 244 C 228 252 216 264 220 276 C 226 280 236 274 238 264 C 240 256 234 248 240 244"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
