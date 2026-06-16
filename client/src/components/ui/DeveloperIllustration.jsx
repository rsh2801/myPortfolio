import { motion } from "motion/react";

const float = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function DeveloperIllustration() {
  return (
    <motion.div animate={float} className="w-full max-w-md mx-auto lg:max-w-lg">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Anime developer at desk illustration"
      >
        <defs>
          {/* Glow filter for screen */}
          <filter id="screenGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Soft shadow */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.15" />
          </filter>
          {/* Hair gradient */}
          <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="50%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          {/* Hoodie gradient */}
          <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
          {/* Screen light gradient */}
          <radialGradient id="screenLight" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--color-accent-cyan)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          {/* Eye gradient */}
          <radialGradient id="eyeIris" cx="45%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="60%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4338ca" />
          </radialGradient>
        </defs>

        {/* ===== DESK SETUP ===== */}

        {/* Desk surface */}
        <rect x="60" y="355" width="380" height="14" rx="4" fill="#2d2040" opacity="0.9" />
        <rect x="60" y="355" width="380" height="7" rx="3" fill="#3d3060" opacity="0.5" />

        {/* Desk legs */}
        <rect x="90" y="369" width="12" height="55" rx="3" fill="#2d2040" opacity="0.7" />
        <rect x="398" y="369" width="12" height="55" rx="3" fill="#2d2040" opacity="0.7" />
        {/* Desk crossbar */}
        <rect x="96" y="400" width="308" height="5" rx="2" fill="#2d2040" opacity="0.35" />

        {/* ===== MONITOR ===== */}

        {/* Monitor stand */}
        <rect x="232" y="310" width="36" height="45" rx="4" fill="#1e1b3a" />
        {/* Monitor base plate */}
        <ellipse cx="250" cy="353" rx="48" ry="6" fill="#1e1b3a" opacity="0.8" />

        {/* Monitor body */}
        <rect x="130" y="160" width="240" height="155" rx="12" fill="#1a1730" filter="url(#softShadow)" />
        {/* Monitor bezel highlight */}
        <rect x="130" y="160" width="240" height="8" rx="12" fill="#2a2550" opacity="0.5" />
        {/* Screen */}
        <rect x="140" y="170" width="220" height="130" rx="6" fill="#0c0a1a" />
        {/* Screen ambient glow on character */}
        <ellipse cx="250" cy="280" rx="120" ry="80" fill="url(#screenLight)" />

        {/* Code lines on screen */}
        <g filter="url(#screenGlow)" opacity="0.9">
          <rect x="158" y="186" width="16" height="4" rx="2" fill="var(--color-accent-pink)" opacity="0.7" />
          <rect x="178" y="186" width="55" height="4" rx="2" fill="var(--color-primary-400)" />
          <rect x="240" y="186" width="30" height="4" rx="2" fill="var(--color-accent-cyan)" opacity="0.8" />

          <rect x="168" y="198" width="40" height="4" rx="2" fill="var(--color-accent-cyan)" />
          <rect x="214" y="198" width="70" height="4" rx="2" fill="#a5b4fc" opacity="0.6" />

          <rect x="168" y="210" width="25" height="4" rx="2" fill="var(--color-accent-pink)" opacity="0.6" />
          <rect x="198" y="210" width="55" height="4" rx="2" fill="var(--color-primary-300)" opacity="0.7" />
          <rect x="260" y="210" width="35" height="4" rx="2" fill="var(--color-accent-cyan)" opacity="0.5" />

          <rect x="178" y="222" width="80" height="4" rx="2" fill="var(--color-primary-400)" opacity="0.5" />
          <rect x="264" y="222" width="20" height="4" rx="2" fill="var(--color-accent-pink)" opacity="0.4" />

          <rect x="168" y="234" width="45" height="4" rx="2" fill="var(--color-accent-cyan)" opacity="0.7" />
          <rect x="220" y="234" width="60" height="4" rx="2" fill="#c7d2fe" opacity="0.4" />

          <rect x="158" y="246" width="20" height="4" rx="2" fill="var(--color-accent-pink)" opacity="0.5" />
          <rect x="184" y="246" width="50" height="4" rx="2" fill="var(--color-primary-400)" opacity="0.6" />

          <rect x="168" y="258" width="70" height="4" rx="2" fill="var(--color-accent-cyan)" opacity="0.4" />
          <rect x="244" y="258" width="30" height="4" rx="2" fill="#a5b4fc" opacity="0.35" />

          <rect x="158" y="270" width="35" height="4" rx="2" fill="var(--color-primary-300)" opacity="0.5" />
          <rect x="200" y="270" width="50" height="4" rx="2" fill="var(--color-accent-pink)" opacity="0.35" />
        </g>

        {/* Blinking cursor */}
        <rect x="282" y="186" width="2" height="12" rx="1" fill="var(--color-accent-cyan)">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>

        {/* Monitor power LED */}
        <circle cx="250" cy="302" r="2" fill="var(--color-accent-cyan)" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* ===== KEYBOARD & MOUSE ===== */}

        {/* Keyboard */}
        <rect x="180" y="330" width="130" height="22" rx="5" fill="#1e1b3a" opacity="0.8" />
        <rect x="180" y="330" width="130" height="4" rx="3" fill="#2a2550" opacity="0.3" />
        {/* Key rows */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <rect key={`k1-${i}`} x={188 + i * 12} y="335" width="8" height="5" rx="1" fill="var(--color-primary-500)" opacity="0.3" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect key={`k2-${i}`} x={192 + i * 12} y="343" width="8" height="5" rx="1" fill="var(--color-primary-500)" opacity="0.2" />
        ))}

        {/* Mouse */}
        <ellipse cx="340" cy="342" rx="12" ry="15" fill="#1e1b3a" opacity="0.7" />
        <line x1="340" y1="330" x2="340" y2="337" stroke="var(--color-primary-500)" strokeWidth="1" opacity="0.3" />

        {/* ===== COFFEE MUG ===== */}
        <rect x="385" y="325" width="28" height="30" rx="5" fill="#3730a3" opacity="0.7" />
        <path d="M413 332 C422 332, 422 348, 413 348" stroke="#3730a3" strokeWidth="3" fill="none" opacity="0.5" />
        {/* Steam wisps */}
        <path d="M394 320 Q394 312, 398 308 Q402 312, 402 320" stroke="var(--color-accent-cyan)" strokeWidth="1.5" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.08;0.3" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="d" values="M394 320 Q394 312, 398 308 Q402 312, 402 320;M394 318 Q394 310, 398 306 Q402 310, 402 318;M394 320 Q394 312, 398 308 Q402 312, 402 320" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M402 322 Q402 316, 405 312 Q408 316, 408 322" stroke="var(--color-accent-cyan)" strokeWidth="1" fill="none" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
        </path>

        {/* ===== PLANT ===== */}
        <rect x="75" y="328" width="28" height="27" rx="4" fill="#3730a3" opacity="0.5" />
        {/* Soil */}
        <ellipse cx="89" cy="330" rx="13" ry="3" fill="#2d2040" opacity="0.6" />
        {/* Leaves */}
        <path d="M89 328 Q82 310, 78 298" stroke="var(--color-accent-cyan)" strokeWidth="2" fill="none" opacity="0.5" />
        <ellipse cx="76" cy="296" rx="8" ry="5" fill="var(--color-accent-cyan)" opacity="0.35" transform="rotate(-30 76 296)" />
        <path d="M89 328 Q89 308, 89 295" stroke="var(--color-accent-cyan)" strokeWidth="2" fill="none" opacity="0.5" />
        <ellipse cx="89" cy="292" rx="7" ry="5" fill="var(--color-accent-cyan)" opacity="0.4" transform="rotate(5 89 292)" />
        <path d="M89 328 Q96 312, 102 300" stroke="var(--color-accent-cyan)" strokeWidth="2" fill="none" opacity="0.45" />
        <ellipse cx="104" cy="298" rx="7" ry="4.5" fill="var(--color-accent-cyan)" opacity="0.3" transform="rotate(25 104 298)" />

        {/* ===== ANIME CHARACTER ===== */}

        {/* Chair */}
        <rect x="190" y="405" width="110" height="8" rx="4" fill="#1e1b3a" opacity="0.6" />
        <rect x="200" y="380" width="90" height="30" rx="10" fill="#2a2050" opacity="0.4" />

        {/* Body / Hoodie */}
        <path
          d="M210 310 C210 295, 215 280, 250 275 C285 280, 290 295, 290 310 L290 395 C290 400, 285 405, 280 405 L220 405 C215 405, 210 400, 210 395 Z"
          fill="url(#hoodieGrad)"
          opacity="0.9"
        />
        {/* Hoodie pocket */}
        <path d="M225 360 L275 360 C278 360, 278 380, 275 380 L225 380 C222 380, 222 360, 225 360" fill="#3730a3" opacity="0.4" />
        {/* Hoodie front zipper line */}
        <line x1="250" y1="280" x2="250" y2="400" stroke="#3730a3" strokeWidth="1.5" opacity="0.3" />
        {/* Hoodie drawstrings */}
        <line x1="242" y1="278" x2="238" y2="305" stroke="#a5b4fc" strokeWidth="1.5" opacity="0.3" />
        <line x1="258" y1="278" x2="262" y2="305" stroke="#a5b4fc" strokeWidth="1.5" opacity="0.3" />

        {/* Collar / hoodie neckline */}
        <path d="M232 275 Q250 285, 268 275" stroke="#3730a3" strokeWidth="2" fill="none" opacity="0.5" />

        {/* Arms */}
        {/* Left arm — resting on keyboard */}
        <path
          d="M212 305 C195 320, 185 340, 200 345"
          stroke="#4f46e5"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* Left hand */}
        <circle cx="200" cy="344" r="8" fill="#f0c5a0" opacity="0.85" />

        {/* Right arm — on mouse area */}
        <path
          d="M288 305 C310 318, 325 335, 330 342"
          stroke="#4f46e5"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* Right hand */}
        <circle cx="332" cy="342" r="8" fill="#f0c5a0" opacity="0.85" />

        {/* ===== HEAD (anime proportions — big!) ===== */}

        {/* Neck */}
        <rect x="240" y="258" width="20" height="22" rx="6" fill="#f0c5a0" opacity="0.9" />

        {/* Head shape — rounded with slight chin */}
        <path
          d="M205 220 C205 180, 215 155, 250 150 C285 155, 295 180, 295 220 C295 245, 280 265, 250 270 C220 265, 205 245, 205 220 Z"
          fill="#f5d5b5"
          filter="url(#softShadow)"
        />
        {/* Face shading — subtle blush */}
        <ellipse cx="222" cy="237" rx="12" ry="6" fill="#f0a0a0" opacity="0.15" />
        <ellipse cx="278" cy="237" rx="12" ry="6" fill="#f0a0a0" opacity="0.15" />

        {/* ===== HAIR ===== */}

        {/* Back hair mass */}
        <path
          d="M198 215 C195 170, 210 140, 250 135 C290 140, 305 170, 302 215 L302 245 C302 250, 298 252, 295 248 L295 220 C295 190, 280 160, 250 155 C220 160, 205 190, 205 220 L205 248 C202 252, 198 250, 198 245 Z"
          fill="url(#hairGrad)"
        />
        {/* Front bangs — spiky anime style */}
        <path d="M210 195 C215 170, 225 155, 230 145 C228 165, 222 180, 218 195 Z" fill="url(#hairGrad)" />
        <path d="M220 190 C222 162, 235 148, 242 138 C238 158, 230 175, 225 190 Z" fill="url(#hairGrad)" />
        <path d="M232 185 C237 158, 248 142, 255 135 C250 155, 242 172, 238 188 Z" fill="url(#hairGrad)" />
        <path d="M245 185 C250 155, 260 142, 268 138 C263 158, 255 172, 250 188 Z" fill="url(#hairGrad)" />
        <path d="M258 188 C262 165, 272 150, 278 142 C274 162, 268 178, 264 192 Z" fill="url(#hairGrad)" />
        <path d="M270 193 C275 172, 282 160, 288 150 C285 168, 280 182, 276 196 Z" fill="url(#hairGrad)" />
        {/* Side hair strands */}
        <path d="M200 220 C196 205, 198 185, 208 170 C204 188, 200 205, 203 222 Z" fill="#312e81" opacity="0.8" />
        <path d="M300 220 C304 205, 302 185, 292 170 C296 188, 300 205, 297 222 Z" fill="#312e81" opacity="0.8" />

        {/* Hair shine highlights */}
        <path d="M228 158 C235 152, 245 150, 255 152" stroke="#818cf8" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M222 165 C230 158, 242 155, 250 157" stroke="#a5b4fc" strokeWidth="1.5" fill="none" opacity="0.25" />

        {/* ===== EYES (big anime eyes!) ===== */}

        {/* Left eye */}
        <ellipse cx="232" cy="222" rx="15" ry="17" fill="white" />
        {/* Iris */}
        <ellipse cx="234" cy="224" rx="11" ry="13" fill="url(#eyeIris)" />
        {/* Pupil */}
        <ellipse cx="235" cy="225" rx="5" ry="6" fill="#1e1b4b" />
        {/* Eye highlights — big sparkle */}
        <circle cx="228" cy="218" r="4" fill="white" opacity="0.95" />
        <circle cx="238" cy="228" r="2" fill="white" opacity="0.7" />
        {/* Upper eyelid / eyelash */}
        <path d="M217 214 C220 207, 232 204, 247 210" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Lower eyelid subtle line */}
        <path d="M220 236 C228 240, 238 240, 245 236" stroke="#c9a882" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Right eye */}
        <ellipse cx="268" cy="222" rx="15" ry="17" fill="white" />
        {/* Iris */}
        <ellipse cx="266" cy="224" rx="11" ry="13" fill="url(#eyeIris)" />
        {/* Pupil */}
        <ellipse cx="265" cy="225" rx="5" ry="6" fill="#1e1b4b" />
        {/* Eye highlights */}
        <circle cx="262" cy="218" r="4" fill="white" opacity="0.95" />
        <circle cx="270" cy="228" r="2" fill="white" opacity="0.7" />
        {/* Upper eyelid / eyelash */}
        <path d="M253 210 C268 204, 280 207, 283 214" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Lower eyelid */}
        <path d="M255 236 C262 240, 272 240, 280 236" stroke="#c9a882" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Eyebrows */}
        <path d="M215 204 C222 198, 235 197, 245 200" stroke="#312e81" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M255 200 C265 197, 278 198, 285 204" stroke="#312e81" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />

        {/* Nose — minimal anime style */}
        <path d="M249 238 L250 243 L253 241" stroke="#d4a980" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

        {/* Mouth — small confident smile */}
        <path d="M241 252 Q250 258, 259 252" stroke="#c9785a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* ===== HEADPHONES ===== */}

        {/* Headband */}
        <path
          d="M202 200 C200 170, 220 148, 250 145 C280 148, 300 170, 298 200"
          stroke="#1e1b3a"
          strokeWidth="6"
          fill="none"
          opacity="0.85"
        />
        {/* Headband highlight */}
        <path
          d="M210 190 C212 170, 228 155, 250 152 C272 155, 288 170, 290 190"
          stroke="#2a2550"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        {/* Left ear cup */}
        <ellipse cx="202" cy="218" rx="14" ry="18" fill="#1e1b3a" opacity="0.9" />
        <ellipse cx="202" cy="218" rx="10" ry="14" fill="#2a2550" opacity="0.5" />
        <circle cx="202" cy="218" r="5" fill="var(--color-primary-500)" opacity="0.4" />
        {/* Right ear cup */}
        <ellipse cx="298" cy="218" rx="14" ry="18" fill="#1e1b3a" opacity="0.9" />
        <ellipse cx="298" cy="218" rx="10" ry="14" fill="#2a2550" opacity="0.5" />
        <circle cx="298" cy="218" r="5" fill="var(--color-primary-500)" opacity="0.4" />

        {/* ===== FLOATING CODE ELEMENTS ===== */}

        {/* Brackets */}
        <text x="80" y="180" fontSize="20" fill="var(--color-accent-pink)" opacity="0.5" fontFamily="monospace" fontWeight="bold">
          {"</>"}
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
        </text>
        <text x="385" y="200" fontSize="16" fill="var(--color-accent-cyan)" opacity="0.4" fontFamily="monospace" fontWeight="bold">
          {"{ }"}
          <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3.5s" repeatCount="indefinite" />
        </text>
        <text x="370" y="155" fontSize="14" fill="var(--color-primary-400)" opacity="0.35" fontFamily="monospace">
          {"( )"}
          <animate attributeName="opacity" values="0.35;0.12;0.35" dur="4s" repeatCount="indefinite" />
        </text>
        <text x="95" y="135" fontSize="13" fill="var(--color-primary-300)" opacity="0.3" fontFamily="monospace">
          {"=>"}
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.8s" repeatCount="indefinite" />
        </text>

        {/* Floating orbs */}
        <circle cx="430" cy="160" r="6" fill="var(--color-primary-500)" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.08;0.25" dur="2s" repeatCount="indefinite" />
          <animate attributeName="r" values="6;7;6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="250" r="5" fill="var(--color-accent-pink)" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.06;0.2" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="450" cy="290" r="4" fill="var(--color-accent-cyan)" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.08;0.25" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="420" cy="240" r="3" fill="var(--color-accent-pink)" opacity="0.18">
          <animate attributeName="opacity" values="0.18;0.05;0.18" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="170" r="4" fill="var(--color-primary-400)" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.06;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Sparkle stars */}
        <g opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
          <line x1="440" y1="180" x2="440" y2="192" stroke="var(--color-accent-cyan)" strokeWidth="1.5" />
          <line x1="434" y1="186" x2="446" y2="186" stroke="var(--color-accent-cyan)" strokeWidth="1.5" />
        </g>
        <g opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.08;0.25" dur="3s" repeatCount="indefinite" />
          <line x1="56" y1="200" x2="56" y2="210" stroke="var(--color-accent-pink)" strokeWidth="1" />
          <line x1="51" y1="205" x2="61" y2="205" stroke="var(--color-accent-pink)" strokeWidth="1" />
        </g>
      </svg>
    </motion.div>
  );
}
