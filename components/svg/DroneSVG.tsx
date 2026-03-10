import React from "react";

export default function DroneSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Central body */}
      <rect x="36" y="38" width="28" height="24" rx="5" />
      {/* Camera dome underneath */}
      <ellipse cx="50" cy="62" rx="5" ry="4" />
      <circle cx="50" cy="62" r="2.5" />

      {/* Front-left arm */}
      <rect
        x="21"
        y="33"
        width="22"
        height="5"
        rx="2.5"
        transform="rotate(-45 32 35.5)"
      />
      {/* Front-right arm */}
      <rect
        x="57"
        y="33"
        width="22"
        height="5"
        rx="2.5"
        transform="rotate(45 68 35.5)"
      />
      {/* Rear-left arm */}
      <rect
        x="21"
        y="62"
        width="22"
        height="5"
        rx="2.5"
        transform="rotate(45 32 64.5)"
      />
      {/* Rear-right arm */}
      <rect
        x="57"
        y="62"
        width="22"
        height="5"
        rx="2.5"
        transform="rotate(-45 68 64.5)"
      />

      {/* Motor mounts + rotors - front left */}
      <circle cx="22" cy="22" r="5" />
      <ellipse cx="22" cy="22" rx="12" ry="3" />

      {/* Motor mounts + rotors - front right */}
      <circle cx="78" cy="22" r="5" />
      <ellipse cx="78" cy="22" rx="12" ry="3" />

      {/* Motor mounts + rotors - rear left */}
      <circle cx="22" cy="78" r="5" />
      <ellipse cx="22" cy="78" rx="12" ry="3" />

      {/* Motor mounts + rotors - rear right */}
      <circle cx="78" cy="78" r="5" />
      <ellipse cx="78" cy="78" rx="12" ry="3" />

      {/* LED lights front */}
      <circle cx="42" cy="40" r="2" />
      <circle cx="58" cy="40" r="2" />

      {/* Battery indicator strip */}
      <rect x="40" y="46" width="20" height="4" rx="2" />

      {/* Landing gear legs */}
      <rect x="38" y="63" width="3" height="10" rx="1.5" />
      <rect x="59" y="63" width="3" height="10" rx="1.5" />
      <rect x="32" y="72" width="14" height="3" rx="1.5" />
      <rect x="54" y="72" width="14" height="3" rx="1.5" />
    </svg>
  );
}
