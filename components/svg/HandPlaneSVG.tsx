import React from "react";

export default function HandPlaneSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/*
        Woodworking hand plane viewed from the side.
        Key parts:
        - Sole (flat bottom)
        - Body/frog (main rectangular mass)
        - Tote (rear pistol-grip handle)
        - Knob (front rounded knob)
        - Blade/iron (diagonal, protruding from mouth at bottom)
        - Mouth opening (slot in sole where blade exits)
        - Chip breaker / cap iron
        - Lateral adjustment lever
        - Depth adjustment wheel (Y-lever area)
      */}

      {/* === SOLE (flat bottom bar) === */}
      <path d="
        M 52 330
        C 48 330 44 333 44 338
        L 44 356
        C 44 361 48 364 52 364
        L 460 364
        C 464 364 468 361 468 356
        L 468 338
        C 468 333 464 330 460 330 Z
      " />

      {/* === MAIN BODY === */}
      <path d="
        M 70 200
        C 66 200 62 203 62 208
        L 62 332
        L 370 332
        L 370 208
        C 370 203 366 200 362 200 Z
      " />

      {/* === MOUTH OPENING (cutout in sole/body bottom) === */}
      {/* This is done via a combined path with evenodd so the mouth appears as a gap */}
      <path
        fillRule="evenodd"
        d="
          M 44 330 L 44 338 L 468 338 L 468 330 Z
          M 220 330 L 248 330 L 248 338 L 220 338 Z
        "
      />

      {/* === BLADE / IRON emerging from mouth === */}
      {/* Angled blade, exits through the mouth slot, tip visible below sole */}
      <path d="
        M 230 120
        C 228 118 224 118 222 120
        L 198 290
        C 197 296 200 302 206 303
        L 258 303
        C 264 302 267 296 266 290 Z
      " />

      {/* Blade tip below the sole - the cutting edge */}
      <path d="
        M 206 338 L 258 338 L 252 370 L 212 370 Z
      " />

      {/* === CAP IRON / CHIP BREAKER (sits on top of blade, shorter) === */}
      <path d="
        M 232 145
        C 230 143 226 143 224 145
        L 208 280
        L 248 280 Z
      " />

      {/* Screw detail on cap iron */}
      <ellipse cx="228" cy="200" rx="10" ry="6" />
      <line x1="218" y1="200" x2="238" y2="200" stroke="currentColor" strokeWidth="3" />

      {/* === TOTE (rear pistol-grip handle) === */}
      {/* Ergonomic curved grip shape */}
      <path
        fillRule="evenodd"
        d="
          M 340 145
          C 334 140 326 138 318 140
          L 310 144
          C 304 148 300 156 300 164
          L 300 210
          C 300 216 302 222 306 226
          L 310 230
          L 310 332
          L 370 332
          L 370 230
          L 374 226
          C 378 222 380 216 380 210
          L 380 180
          C 380 162 368 148 340 145 Z

          M 316 162
          C 312 166 310 172 310 178
          L 310 216
          C 310 222 314 226 320 228
          L 356 228
          C 362 226 366 222 366 216
          L 366 178
          C 366 172 364 166 360 162
          C 354 156 344 152 338 152
          C 330 152 322 156 316 162 Z
        "
      />

      {/* Tote grain detail lines */}
      <path d="M 322 168 C 324 165 330 163 336 164" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 320 178 C 322 174 332 171 340 173" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 322 190 C 325 186 334 184 342 186" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* === KNOB (front rounded knob) === */}
      {/* Turned wooden knob - sits at front of body */}
      <path d="
        M 130 200
        C 118 200 108 210 108 222
        C 108 232 116 240 126 242
        L 126 280
        C 126 284 130 286 134 286
        L 150 286
        C 154 286 158 284 158 280
        L 158 242
        C 168 240 176 232 176 222
        C 176 210 166 200 154 200 Z
      " />

      {/* Knob waist groove */}
      <path
        fillRule="evenodd"
        d="
          M 108 222 C 108 234 118 244 130 244 L 154 244 C 166 244 176 234 176 222 C 176 210 166 200 154 200 L 130 200 C 118 200 108 210 108 222 Z
          M 116 222 C 116 230 122 237 130 238 L 154 238 C 162 237 168 230 168 222 C 168 214 162 207 154 207 L 130 207 C 122 207 116 214 116 222 Z
        "
      />

      {/* Top of knob cap */}
      <ellipse cx="142" cy="200" rx="20" ry="8" />

      {/* === LATERAL ADJUSTMENT LEVER === */}
      <path d="
        M 290 170
        C 288 168 284 168 282 170
        L 280 174
        L 280 260
        L 292 260
        L 292 174 Z
      " />
      <ellipse cx="286" cy="166" rx="12" ry="8" />

      {/* === DEPTH ADJUSTMENT WHEEL (Y-lever / brass wheel) === */}
      <circle cx="180" cy="280" r="28" />
      <circle cx="180" cy="280" r="20" />
      {/* Wheel spokes */}
      <line x1="180" y1="252" x2="180" y2="308" stroke="currentColor" strokeWidth="5" />
      <line x1="152" y1="280" x2="208" y2="280" stroke="currentColor" strokeWidth="5" />
      <line x1="160" y1="260" x2="200" y2="300" stroke="currentColor" strokeWidth="4" />
      <line x1="200" y1="260" x2="160" y2="300" stroke="currentColor" strokeWidth="4" />

      {/* === FROG / BED (shows blade angle visually) === */}
      <path d="M 200 332 L 260 180 L 280 180 L 280 332 Z" opacity="0.35" />

      {/* === WOOD SHAVING curling from mouth === */}
      <path
        d="M 220 364 C 210 368 198 374 192 382 C 186 390 188 400 196 404 C 204 408 214 404 218 396 C 222 388 218 378 212 374"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* === FRONT TOE and HEEL details === */}
      {/* Front toe chamfer */}
      <path d="M 62 330 L 62 340 L 52 340 L 52 330 Z" />
      {/* Rear heel chamfer */}
      <path d="M 370 330 L 370 340 L 380 340 L 380 330 Z" />

      {/* === BODY SIDE BOLT HEADS === */}
      <circle cx="100" cy="260" r="10" />
      <circle cx="100" cy="260" r="6" />
      <circle cx="330" cy="260" r="10" />
      <circle cx="330" cy="260" r="6" />

      {/* === FROG SEAT detail === */}
      <path d="M 195 332 L 265 210 L 272 212 L 202 334 Z" />
    </svg>
  );
}
