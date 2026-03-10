import React from "react";

export default function CountryHouseSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* === SKY / GROUND === */}
      {/* Ground plane */}
      <path d="M 0 440 C 80 436 160 432 256 432 C 352 432 432 436 512 440 L 512 512 L 0 512 Z" />

      {/* === MAIN HOUSE BODY === */}
      <path d="
        M 72 268
        L 72 432
        L 440 432
        L 440 268 Z
      " />

      {/* === ROOF - steeply pitched gable === */}
      <path d="
        M 40 278
        C 38 278 36 276 37 274
        L 254 76
        C 255 74 257 74 258 76
        L 475 274
        C 476 276 474 278 472 278 Z
      " />

      {/* Roof overhang fascia board */}
      <rect x="34" y="272" width="444" height="14" rx="2" />

      {/* Roof ridge cap detail */}
      <rect x="248" y="74" width="16" height="20" rx="3" />

      {/* === ROOF TEXTURE - subtle shingle lines === */}
      <path d="M 37 294 L 256 112 L 475 294" stroke="currentColor" strokeWidth="3" fill="none" strokeOpacity="0.3" />
      <path d="M 37 314 L 256 132 L 475 314" stroke="currentColor" strokeWidth="3" fill="none" strokeOpacity="0.3" />
      <path d="M 37 334 L 256 152 L 475 334" stroke="currentColor" strokeWidth="3" fill="none" strokeOpacity="0.3" />

      {/* === CHIMNEY === */}
      <path d="
        M 344 80
        L 344 212
        L 390 212
        L 390 114
        C 390 96 378 82 364 80 Z
      " />
      {/* Chimney cap flashing */}
      <rect x="336" y="74" width="62" height="12" rx="2" />
      {/* Chimney crown */}
      <rect x="330" y="64" width="74" height="14" rx="3" />

      {/* Smoke wisps */}
      <path
        d="M 358 60 C 354 50 348 42 350 30 C 352 18 362 12 366 20"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 374 54 C 370 44 366 36 370 24 C 374 12 384 8 386 16"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 365 46 C 362 38 360 30 364 22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* === GABLE VENT / ATTIC WINDOW === */}
      <path
        fillRule="evenodd"
        d="
          M 220 190 L 256 144 L 292 190 Z
          M 226 188 L 256 150 L 286 188 Z
        "
      />
      {/* Gable vent louvers */}
      <line x1="236" y1="178" x2="276" y2="178" stroke="currentColor" strokeWidth="3" />
      <line x1="240" y1="170" x2="272" y2="170" stroke="currentColor" strokeWidth="3" />
      <line x1="244" y1="162" x2="268" y2="162" stroke="currentColor" strokeWidth="3" />

      {/* === FRONT DOOR === */}
      <path
        fillRule="evenodd"
        d="
          M 200 432 L 200 330
          C 200 316 224 304 256 304
          C 288 304 312 316 312 330
          L 312 432 Z
          M 210 432 L 210 332
          C 210 320 230 310 256 310
          C 282 310 302 320 302 332
          L 302 432 Z
        "
      />

      {/* Door top arch detail */}
      <path d="M 210 332 C 210 320 230 310 256 310 C 282 310 302 320 302 332 L 294 332 C 294 324 276 316 256 316 C 236 316 218 324 218 332 Z" />

      {/* Door panels */}
      <rect x="214" y="344" width="36" height="28" rx="2" />
      <rect x="262" y="344" width="36" height="28" rx="2" />
      <rect x="214" y="382" width="36" height="40" rx="2" />
      <rect x="262" y="382" width="36" height="40" rx="2" />

      {/* Door knob */}
      <circle cx="294" cy="380" r="7" />
      <circle cx="294" cy="380" r="4" />

      {/* === LEFT WINDOW === */}
      <path
        fillRule="evenodd"
        d="
          M 96 358 Q 96 344 110 344 L 186 344 Q 200 344 200 358 L 200 410 Q 200 424 186 424 L 110 424 Q 96 424 96 410 Z
          M 104 358 L 104 410 L 192 410 L 192 358 Z
        "
      />
      {/* Window muntins */}
      <rect x="96" y="381" width="104" height="5" />
      <rect x="145" y="344" width="5" height="80" />
      {/* Window sill */}
      <rect x="90" y="420" width="116" height="8" rx="2" />
      {/* Window top pediment */}
      <rect x="94" y="336" width="120" height="10" rx="2" />
      <path d="M 148 320 L 104 336 L 192 336 Z" />

      {/* === RIGHT WINDOW === */}
      <path
        fillRule="evenodd"
        d="
          M 312 358 Q 312 344 326 344 L 402 344 Q 416 344 416 358 L 416 410 Q 416 424 402 424 L 326 424 Q 312 424 312 410 Z
          M 320 358 L 320 410 L 408 410 L 408 358 Z
        "
      />
      {/* Window muntins */}
      <rect x="312" y="381" width="104" height="5" />
      <rect x="361" y="344" width="5" height="80" />
      {/* Window sill */}
      <rect x="306" y="420" width="116" height="8" rx="2" />
      {/* Window top pediment */}
      <rect x="310" y="336" width="120" height="10" rx="2" />
      <path d="M 364 320 L 320 336 L 408 336 Z" />

      {/* === PORCH / STOOP === */}
      <path d="M 172 432 L 172 440 L 340 440 L 340 432 Z" />
      <path d="M 158 440 L 158 448 L 354 448 L 354 440 Z" />
      <path d="M 144 448 L 144 458 L 368 458 L 368 448 Z" />

      {/* Porch columns left */}
      <rect x="182" y="378" width="14" height="54" rx="3" />
      {/* Column capital */}
      <rect x="178" y="374" width="22" height="7" rx="1" />
      <rect x="180" y="368" width="18" height="8" rx="2" />

      {/* Porch columns right */}
      <rect x="316" y="378" width="14" height="54" rx="3" />
      {/* Column capital */}
      <rect x="312" y="374" width="22" height="7" rx="1" />
      <rect x="314" y="368" width="18" height="8" rx="2" />

      {/* === SHUTTERS === */}
      {/* Left window - left shutter */}
      <path d="M 74 344 L 94 344 L 94 424 L 74 424 Z" />
      <line x1="74" y1="364" x2="94" y2="364" stroke="currentColor" strokeWidth="3" />
      <line x1="74" y1="384" x2="94" y2="384" stroke="currentColor" strokeWidth="3" />
      <line x1="74" y1="404" x2="94" y2="404" stroke="currentColor" strokeWidth="3" />

      {/* Left window - right shutter */}
      <path d="M 202 344 L 222 344 L 222 424 L 202 424 Z" />
      <line x1="202" y1="364" x2="222" y2="364" stroke="currentColor" strokeWidth="3" />
      <line x1="202" y1="384" x2="222" y2="384" stroke="currentColor" strokeWidth="3" />
      <line x1="202" y1="404" x2="222" y2="404" stroke="currentColor" strokeWidth="3" />

      {/* Right window - left shutter */}
      <path d="M 290 344 L 310 344 L 310 424 L 290 424 Z" />
      <line x1="290" y1="364" x2="310" y2="364" stroke="currentColor" strokeWidth="3" />
      <line x1="290" y1="384" x2="310" y2="384" stroke="currentColor" strokeWidth="3" />
      <line x1="290" y1="404" x2="310" y2="404" stroke="currentColor" strokeWidth="3" />

      {/* Right window - right shutter */}
      <path d="M 418 344 L 438 344 L 438 424 L 418 424 Z" />
      <line x1="418" y1="364" x2="438" y2="364" stroke="currentColor" strokeWidth="3" />
      <line x1="418" y1="384" x2="438" y2="384" stroke="currentColor" strokeWidth="3" />
      <line x1="418" y1="404" x2="438" y2="404" stroke="currentColor" strokeWidth="3" />

      {/* === FENCE === */}
      {/* Left fence section */}
      <rect x="4" y="400" width="6" height="40" rx="2" />
      <rect x="20" y="400" width="6" height="40" rx="2" />
      <rect x="36" y="400" width="6" height="40" rx="2" />
      <rect x="52" y="400" width="6" height="40" rx="2" />
      {/* Fence picket tops - pointed */}
      <path d="M 4 400 L 7 390 L 10 400 Z" />
      <path d="M 20 400 L 23 390 L 26 400 Z" />
      <path d="M 36 400 L 39 390 L 42 400 Z" />
      <path d="M 52 400 L 55 390 L 58 400 Z" />
      {/* Fence rails */}
      <rect x="2" y="408" width="60" height="6" rx="2" />
      <rect x="2" y="424" width="60" height="6" rx="2" />

      {/* Right fence section */}
      <rect x="450" y="400" width="6" height="40" rx="2" />
      <rect x="466" y="400" width="6" height="40" rx="2" />
      <rect x="482" y="400" width="6" height="40" rx="2" />
      <rect x="498" y="400" width="6" height="40" rx="2" />
      {/* Fence picket tops - pointed */}
      <path d="M 450 400 L 453 390 L 456 400 Z" />
      <path d="M 466 400 L 469 390 L 472 400 Z" />
      <path d="M 482 400 L 485 390 L 488 400 Z" />
      <path d="M 498 400 L 501 390 L 504 400 Z" />
      {/* Fence rails */}
      <rect x="448" y="408" width="60" height="6" rx="2" />
      <rect x="448" y="424" width="60" height="6" rx="2" />

      {/* === TREES ON EITHER SIDE === */}
      {/* Left tree */}
      <path d="
        M 30 272
        C 20 256 16 236 22 218
        C 28 200 44 186 62 182
        C 48 174 40 158 46 142
        C 52 126 68 118 82 122
        C 86 104 100 92 116 92
        C 132 92 144 106 144 122
        C 152 116 164 116 170 124
        C 178 134 174 148 164 158
        C 176 158 184 170 180 182
        C 178 188 172 194 166 196
        C 172 204 172 218 164 228
        C 158 236 148 240 138 238
        C 132 252 118 260 102 260
        C 74 260 50 278 30 272 Z
      " />
      {/* Left tree trunk */}
      <rect x="100" y="260" width="20" height="60" rx="4" />
      {/* Trunk roots */}
      <path d="M 96 308 C 88 312 80 316 72 312 C 80 308 90 304 100 308 Z" />
      <path d="M 124 308 C 132 312 140 316 148 312 C 140 308 130 304 120 308 Z" />

      {/* Right tree */}
      <path d="
        M 482 272
        C 492 256 496 236 490 218
        C 484 200 468 186 450 182
        C 464 174 472 158 466 142
        C 460 126 444 118 430 122
        C 426 104 412 92 396 92
        C 380 92 368 106 368 122
        C 360 116 348 116 342 124
        C 334 134 338 148 348 158
        C 336 158 328 170 332 182
        C 334 188 340 194 346 196
        C 340 204 340 218 348 228
        C 354 236 364 240 374 238
        C 380 252 394 260 410 260
        C 438 260 462 278 482 272 Z
      " />
      {/* Right tree trunk */}
      <rect x="392" y="260" width="20" height="60" rx="4" />
      {/* Trunk roots */}
      <path d="M 388 308 C 380 312 372 316 364 312 C 372 308 382 304 392 308 Z" />
      <path d="M 416 308 C 424 312 432 316 440 312 C 432 308 422 304 412 308 Z" />

      {/* === FOUNDATION LINE === */}
      <rect x="64" y="430" width="384" height="10" rx="2" />

      {/* === PATHWAY TO DOOR === */}
      <path d="
        M 220 458 C 214 472 208 490 204 512 L 308 512 C 304 490 298 472 292 458 Z
      " />
    </svg>
  );
}
