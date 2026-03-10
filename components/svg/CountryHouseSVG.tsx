import React from "react";

export default function CountryHouseSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Main house body with door and window cutouts */}
      <path
        fillRule="evenodd"
        d="
          M 80 170 L 80 360 L 432 360 L 432 170 Z
          M 216 360 L 216 260 C 216 248 232 238 256 238 C 280 238 296 248 296 260 L 296 360 Z
          M 104 220 L 104 300 L 188 300 L 188 220 Z
          M 324 220 L 324 300 L 408 300 L 408 220 Z
        "
      />

      {/* Door arch detail */}
      <path
        fillRule="evenodd"
        d="
          M 216 260 C 216 248 232 238 256 238 C 280 238 296 248 296 260 L 290 260 C 290 252 276 244 256 244 C 236 244 222 252 222 260 Z
        "
      />

      {/* Door panels - as negative space */}
      <path
        fillRule="evenodd"
        d="
          M 224 272 L 224 310 L 252 310 L 252 272 Z
          M 230 278 L 230 304 L 246 304 L 246 278 Z
        "
      />
      <path
        fillRule="evenodd"
        d="
          M 260 272 L 260 310 L 288 310 L 288 272 Z
          M 266 278 L 266 304 L 282 304 L 282 278 Z
        "
      />
      <path
        fillRule="evenodd"
        d="
          M 224 318 L 224 356 L 252 356 L 252 318 Z
          M 230 324 L 230 350 L 246 350 L 246 324 Z
        "
      />
      <path
        fillRule="evenodd"
        d="
          M 260 318 L 260 356 L 288 356 L 288 318 Z
          M 266 324 L 266 350 L 282 350 L 282 324 Z
        "
      />

      {/* Door knob */}
      <circle cx="288" cy="310" r="5" />

      {/* Window cross-panes - left window */}
      <rect x="104" y="256" width="84" height="6" />
      <rect x="143" y="220" width="6" height="80" />

      {/* Window cross-panes - right window */}
      <rect x="324" y="256" width="84" height="6" />
      <rect x="363" y="220" width="6" height="80" />

      {/* Window sills */}
      <rect x="98" y="298" width="96" height="8" rx="2" />
      <rect x="318" y="298" width="96" height="8" rx="2" />

      {/* Shutters - left window */}
      <rect x="86" y="218" width="16" height="84" rx="2" />
      <rect x="190" y="218" width="16" height="84" rx="2" />

      {/* Shutters - right window */}
      <rect x="306" y="218" width="16" height="84" rx="2" />
      <rect x="410" y="218" width="16" height="84" rx="2" />

      {/* Roof */}
      <path d="
        M 50 178 L 256 40 L 462 178 L 446 178 L 256 56 L 66 178 Z
      " />
      {/* Roof fill */}
      <path d="M 56 178 L 256 46 L 456 178 Z" />

      {/* Chimney */}
      <rect x="350" y="60" width="40" height="104" />
      <rect x="344" y="52" width="52" height="14" rx="2" />

      {/* Chimney smoke */}
      <path d="M 366 48 C 362 36 358 24 362 14 C 366 4 376 2 378 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 378 42 C 374 32 372 22 376 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Gable vent */}
      <path
        fillRule="evenodd"
        d="
          M 230 138 L 256 102 L 282 138 Z
          M 238 134 L 256 110 L 274 134 Z
        "
      />

      {/* Porch steps */}
      <rect x="200" y="360" width="112" height="8" />
      <rect x="190" y="368" width="132" height="8" />
      <rect x="180" y="376" width="152" height="8" />

      {/* Foundation */}
      <rect x="72" y="356" width="368" height="8" rx="1" />

      {/* Fence - left */}
      <rect x="8" y="320" width="4" height="48" />
      <rect x="22" y="320" width="4" height="48" />
      <rect x="36" y="320" width="4" height="48" />
      <rect x="50" y="320" width="4" height="48" />
      <rect x="64" y="320" width="4" height="48" />
      <path d="M 8 320 L 10 312 L 12 320 Z" />
      <path d="M 22 320 L 24 312 L 26 320 Z" />
      <path d="M 36 320 L 38 312 L 40 320 Z" />
      <path d="M 50 320 L 52 312 L 54 320 Z" />
      <path d="M 64 320 L 66 312 L 68 320 Z" />
      <rect x="6" y="332" width="64" height="4" />
      <rect x="6" y="350" width="64" height="4" />

      {/* Fence - right */}
      <rect x="444" y="320" width="4" height="48" />
      <rect x="458" y="320" width="4" height="48" />
      <rect x="472" y="320" width="4" height="48" />
      <rect x="486" y="320" width="4" height="48" />
      <rect x="500" y="320" width="4" height="48" />
      <path d="M 444 320 L 446 312 L 448 320 Z" />
      <path d="M 458 320 L 460 312 L 462 320 Z" />
      <path d="M 472 320 L 474 312 L 476 320 Z" />
      <path d="M 486 320 L 488 312 L 490 320 Z" />
      <path d="M 500 320 L 502 312 L 504 320 Z" />
      <rect x="442" y="332" width="64" height="4" />
      <rect x="442" y="350" width="64" height="4" />

      {/* Ground line */}
      <rect x="0" y="384" width="512" height="16" rx="2" />
    </svg>
  );
}
