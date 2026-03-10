import React from "react";

export default function CodeTerminalSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/*
        Strategy: draw filled outer frame, then use evenodd fill rule on a path
        that subtracts the inner screen area, leaving a frame.
        Then overlay text-line shapes inside the screen area.
      */}

      {/* Outer window frame with title bar */}
      <path
        fillRule="evenodd"
        d="
          M8 20 Q8 14 14 14 L86 14 Q92 14 92 20 L92 86 Q92 92 86 92 L14 92 Q8 92 8 86 Z
          M12 30 L88 30 L88 89 Q88 89 86 89 L14 89 Q12 89 12 89 Z
        "
      />

      {/* Title bar decorative dots */}
      <circle cx="22" cy="22" r="3" />
      <circle cx="32" cy="22" r="3" />
      <circle cx="42" cy="22" r="3" />

      {/* Title bar text label */}
      <rect x="55" y="18" width="26" height="7" rx="2" />

      {/* Terminal text lines inside screen area */}
      {/* Prompt chevron > shape */}
      <path d="M16 37 L20 40 L16 43 L14 41 L17 40 L14 39 Z" />
      {/* Command text after prompt */}
      <rect x="22" y="38" width="22" height="3.5" rx="1" />

      {/* Output line 1 */}
      <rect x="16" y="46" width="32" height="3" rx="1" />

      {/* Output line 2 - shorter */}
      <rect x="16" y="52" width="24" height="3" rx="1" />

      {/* Blank line then new prompt */}
      {/* Prompt chevron > shape */}
      <path d="M16 61 L20 64 L16 67 L14 65 L17 64 L14 63 Z" />
      {/* Command text */}
      <rect x="22" y="62" width="36" height="3.5" rx="1" />

      {/* Output line */}
      <rect x="16" y="70" width="28" height="3" rx="1" />

      {/* Prompt line with cursor */}
      <path d="M16 79 L20 82 L16 85 L14 83 L17 82 L14 81 Z" />
      {/* Cursor block - blinking cursor */}
      <rect x="22" y="79" width="4" height="5" rx="0.5" />
    </svg>
  );
}
