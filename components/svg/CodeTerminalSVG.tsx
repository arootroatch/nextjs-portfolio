import React from "react";

export default function CodeTerminalSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* === MONITOR / DISPLAY FRAME === */}
      {/* Outer shell with rounded corners and depth */}
      <path
        fillRule="evenodd"
        d="
          M 40 56
          C 40 38 54 24 72 24
          L 440 24
          C 458 24 472 38 472 56
          L 472 376
          C 472 394 458 408 440 408
          L 72 408
          C 54 408 40 394 40 376 Z

          M 56 76
          L 56 368
          C 56 378 64 386 74 386
          L 438 386
          C 448 386 456 378 456 368
          L 456 76 Z
        "
      />

      {/* === TITLE BAR / MENU BAR === */}
      {/* Traffic light buttons */}
      <circle cx="90" cy="50" r="10" />
      <circle cx="120" cy="50" r="10" />
      <circle cx="150" cy="50" r="10" />

      {/* Title bar text pill */}
      <rect x="196" y="40" width="120" height="20" rx="8" />

      {/* Menu bar right icons */}
      <rect x="356" y="40" width="40" height="6" rx="3" />
      <rect x="356" y="50" width="30" height="6" rx="3" />
      <rect x="404" y="40" width="36" height="20" rx="4" />

      {/* === SCREEN / TERMINAL CONTENT AREA === */}
      {/* The screen bg is the gap from evenodd above; content sits in that gap */}

      {/* === PROMPT LINE 1 === */}
      {/* User@machine path indicator */}
      <rect x="74" y="100" width="80" height="12" rx="4" />
      <rect x="162" y="100" width="50" height="12" rx="4" />
      {/* $ prompt symbol */}
      <path d="M 220 100 C 218 100 216 102 217 104 L 220 108 C 218 110 218 112 220 112 L 224 112 C 226 112 228 110 227 108 L 224 104 C 226 102 226 100 224 100 Z" />
      {/* Command text - "git clone ..." */}
      <rect x="234" y="101" width="96" height="10" rx="3" />
      <rect x="338" y="101" width="60" height="10" rx="3" />
      <rect x="406" y="101" width="34" height="10" rx="3" />

      {/* === OUTPUT LINES after git clone === */}
      <rect x="74" y="122" width="18" height="8" rx="2" />
      <rect x="98" y="122" width="140" height="8" rx="2" />
      <rect x="74" y="136" width="18" height="8" rx="2" />
      <rect x="98" y="136" width="180" height="8" rx="2" />
      <rect x="74" y="150" width="18" height="8" rx="2" />
      <rect x="98" y="150" width="110" height="8" rx="2" />

      {/* === PROMPT LINE 2 - in repo dir === */}
      <rect x="74" y="172" width="80" height="12" rx="4" />
      <rect x="162" y="172" width="90" height="12" rx="4" />
      <path d="M 260 172 C 258 172 256 174 257 176 L 260 180 C 258 182 258 184 260 184 L 264 184 C 266 184 268 182 267 180 L 264 176 C 266 174 266 172 264 172 Z" />
      {/* "npm install" command */}
      <rect x="274" y="173" width="58" height="10" rx="3" />
      <rect x="340" y="173" width="52" height="10" rx="3" />

      {/* === NPM INSTALL OUTPUT === */}
      {/* Progress bar line */}
      <rect x="74" y="194" width="340" height="10" rx="3" />
      <rect x="74" y="194" width="220" height="10" rx="3" />
      <rect x="74" y="210" width="160" height="8" rx="2" />
      <rect x="242" y="210" width="60" height="8" rx="2" />
      <rect x="310" y="210" width="40" height="8" rx="2" />
      <rect x="74" y="224" width="120" height="8" rx="2" />

      {/* === PROMPT LINE 3 === */}
      <rect x="74" y="246" width="80" height="12" rx="4" />
      <rect x="162" y="246" width="90" height="12" rx="4" />
      <path d="M 260 246 C 258 246 256 248 257 250 L 260 254 C 258 256 258 258 260 258 L 264 258 C 266 258 268 256 267 254 L 264 250 C 266 248 266 246 264 246 Z" />
      {/* "npm run dev" */}
      <rect x="274" y="247" width="58" height="10" rx="3" />
      <rect x="340" y="247" width="36" height="10" rx="3" />
      <rect x="384" y="247" width="28" height="10" rx="3" />

      {/* === SERVER STARTUP OUTPUT === */}
      <rect x="74" y="268" width="30" height="8" rx="2" />
      <rect x="112" y="268" width="160" height="8" rx="2" />
      <rect x="74" y="282" width="30" height="8" rx="2" />
      <rect x="112" y="282" width="120" height="8" rx="2" />
      <rect x="240" y="282" width="80" height="8" rx="2" />
      <rect x="74" y="296" width="30" height="8" rx="2" />
      <rect x="112" y="296" width="140" height="8" rx="2" />

      {/* === ACTIVE PROMPT LINE with blinking cursor === */}
      <rect x="74" y="318" width="80" height="12" rx="4" />
      <rect x="162" y="318" width="90" height="12" rx="4" />
      <path d="M 260 318 C 258 318 256 320 257 322 L 260 326 C 258 328 258 330 260 330 L 264 330 C 266 330 268 328 267 326 L 264 322 C 266 320 266 318 264 318 Z" />
      {/* Cursor block */}
      <rect x="274" y="318" width="12" height="14" rx="1" />

      {/* === HORIZONTAL SCROLLBAR at bottom of content === */}
      <rect x="56" y="374" width="400" height="6" rx="3" />
      <rect x="56" y="374" width="100" height="6" rx="3" />

      {/* === MONITOR STAND / BASE === */}
      {/* Stand neck */}
      <path d="M 232 408 C 228 408 224 412 224 420 L 216 460 L 296 460 L 288 420 C 288 412 284 408 280 408 Z" />
      {/* Base foot */}
      <path d="M 176 460 C 172 460 168 464 168 468 C 168 476 176 480 196 482 L 316 482 C 336 480 344 476 344 468 C 344 464 340 460 336 460 Z" />

      {/* === SUBTLE CODE BRACKET decoration on right panel === */}
      {/* Chevron ">" prompt at a larger scale, decorative */}
      <path d="
        M 430 290
        L 446 310
        L 430 330
        L 422 322
        L 432 310
        L 422 298 Z
      " />
    </svg>
  );
}
