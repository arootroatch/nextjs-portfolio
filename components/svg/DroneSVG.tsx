import React from "react";

export default function DroneSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* === CENTRAL BODY === */}
      {/* Main fuselage - streamlined hexagonal form */}
      <path d="
        M 256 158
        C 232 158 212 164 198 174
        C 184 184 176 198 176 214
        L 176 298
        C 176 314 184 328 198 338
        C 212 348 232 354 256 354
        C 280 354 300 348 314 338
        C 328 328 336 314 336 298
        L 336 214
        C 336 198 328 184 314 174
        C 300 164 280 158 256 158 Z
      " />

      {/* Top shell / canopy hump */}
      <path d="
        M 210 180
        C 222 172 238 168 256 168
        C 274 168 290 172 302 180
        C 314 188 320 198 320 210
        L 320 220
        C 306 212 282 206 256 206
        C 230 206 206 212 192 220
        L 192 210
        C 192 198 198 188 210 180 Z
      " />

      {/* Body side vents / grill detail */}
      <rect x="194" y="240" width="8" height="30" rx="2" />
      <rect x="204" y="235" width="8" height="40" rx="2" />
      <rect x="300" y="240" width="8" height="30" rx="2" />
      <rect x="300" y="235" width="8" height="40" rx="2" />

      {/* Battery hatch on top */}
      <path d="
        M 226 168 C 238 164 268 164 280 168 L 278 186 C 268 182 244 182 234 186 Z
      " />

      {/* === CAMERA GIMBAL / DOME === */}
      <path d="
        M 240 340
        C 240 338 248 334 256 334
        C 264 334 272 338 272 340
        L 272 356
        C 272 366 264 374 256 374
        C 248 374 240 366 240 356 Z
      " />
      <ellipse cx="256" cy="360" rx="20" ry="14" />
      {/* Camera lens */}
      <circle cx="256" cy="362" r="10" />
      <circle cx="256" cy="362" r="6" />
      <circle cx="256" cy="362" r="3" />
      {/* Lens glint */}
      <circle cx="252" cy="358" r="2" />

      {/* === ARMS - four diagonal booms === */}
      {/* Front-left arm */}
      <path d="
        M 192 200
        C 190 196 186 193 182 192
        L 110 162
        C 104 160 98 163 96 169
        C 94 175 97 181 103 183
        L 176 213
        C 182 215 188 212 190 206 Z
      " />

      {/* Front-right arm */}
      <path d="
        M 320 200
        C 322 196 326 193 330 192
        L 402 162
        C 408 160 414 163 416 169
        C 418 175 415 181 409 183
        L 336 213
        C 330 215 324 212 322 206 Z
      " />

      {/* Rear-left arm */}
      <path d="
        M 192 312
        C 190 316 186 319 182 320
        L 110 350
        C 104 352 98 349 96 343
        C 94 337 97 331 103 329
        L 176 299
        C 182 297 188 300 190 306 Z
      " />

      {/* Rear-right arm */}
      <path d="
        M 320 312
        C 322 316 326 319 330 320
        L 402 350
        C 408 352 414 349 416 343
        C 418 337 415 331 409 329
        L 336 299
        C 330 297 324 300 322 306 Z
      " />

      {/* === MOTOR HOUSINGS (at arm ends) === */}
      {/* Front-left motor */}
      <circle cx="92" cy="148" r="28" />
      <circle cx="92" cy="148" r="18" />
      <circle cx="92" cy="148" r="8" />

      {/* Front-right motor */}
      <circle cx="420" cy="148" r="28" />
      <circle cx="420" cy="148" r="18" />
      <circle cx="420" cy="148" r="8" />

      {/* Rear-left motor */}
      <circle cx="92" cy="364" r="28" />
      <circle cx="92" cy="364" r="18" />
      <circle cx="92" cy="364" r="8" />

      {/* Rear-right motor */}
      <circle cx="420" cy="364" r="28" />
      <circle cx="420" cy="364" r="18" />
      <circle cx="420" cy="364" r="8" />

      {/* === PROPELLERS === */}
      {/* Front-left props - two blades, rotated */}
      <path d="
        M 92 148
        C 80 136 52 122 34 126
        C 24 128 22 138 30 144
        C 44 152 74 148 92 148 Z
      " />
      <path d="
        M 92 148
        C 104 160 132 174 150 170
        C 160 168 162 158 154 152
        C 140 144 110 148 92 148 Z
      " />

      {/* Front-right props */}
      <path d="
        M 420 148
        C 408 136 380 122 362 126
        C 352 128 350 138 358 144
        C 372 152 402 148 420 148 Z
      " />
      <path d="
        M 420 148
        C 432 160 460 174 478 170
        C 488 168 490 158 482 152
        C 468 144 438 148 420 148 Z
      " />

      {/* Rear-left props */}
      <path d="
        M 92 364
        C 80 352 52 338 34 342
        C 24 344 22 354 30 360
        C 44 368 74 364 92 364 Z
      " />
      <path d="
        M 92 364
        C 104 376 132 390 150 386
        C 160 384 162 374 154 368
        C 140 360 110 364 92 364 Z
      " />

      {/* Rear-right props */}
      <path d="
        M 420 364
        C 408 352 380 338 362 342
        C 352 344 350 354 358 360
        C 372 368 402 364 420 364 Z
      " />
      <path d="
        M 420 364
        C 432 376 460 390 478 386
        C 488 384 490 374 482 368
        C 468 360 438 364 420 364 Z
      " />

      {/* === LANDING GEAR === */}
      {/* Front-left strut */}
      <path d="M 200 336 C 198 340 192 360 180 376 L 172 376 C 172 376 184 356 186 336 Z" />
      {/* Front-right strut */}
      <path d="M 312 336 C 314 340 320 360 332 376 L 340 376 C 340 376 328 356 326 336 Z" />
      {/* Left skid */}
      <path d="M 162 376 C 156 374 150 376 148 380 C 148 382 152 384 162 384 L 200 384 C 210 384 214 382 214 380 C 214 376 208 374 200 376 Z" />
      {/* Right skid */}
      <path d="M 312 376 C 306 374 300 376 298 380 C 298 382 302 384 312 384 L 350 384 C 360 384 364 382 364 380 C 364 376 358 374 350 376 Z" />

      {/* === STATUS LEDs === */}
      <circle cx="214" cy="212" r="7" />
      <circle cx="298" cy="212" r="7" />
      <circle cx="256" cy="310" r="7" />

      {/* === ANTENNA === */}
      <path d="M 256 158 L 256 120 C 256 116 258 112 262 110 C 264 109 266 110 266 112 L 266 158 Z" />
      <circle cx="262" cy="108" r="8" />
    </svg>
  );
}
