/** Layered flat sunset landscape — matches reference hero art direction */
export default function HeroLandscape({ parallax = { x: 0, y: 0 } }) {
  const px = (factor) => ({
    transform: `translate(${parallax.x * factor}px, ${parallax.y * factor}px)`,
  });

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde9c8" />
          <stop offset="45%" stopColor="#f5b87a" />
          <stop offset="100%" stopColor="#e8784a" />
        </linearGradient>
        <linearGradient id="hero-sun-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4c9" />
          <stop offset="100%" stopColor="#ffd88a" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="hero-mountain-far" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0a088" />
          <stop offset="100%" stopColor="#d86a52" />
        </linearGradient>
        <linearGradient id="hero-hill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a84850" />
          <stop offset="100%" stopColor="#6e2838" />
        </linearGradient>
        <linearGradient id="hero-trees-mid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5c2235" />
          <stop offset="100%" stopColor="#2a0f22" />
        </linearGradient>
      </defs>

      <rect width="1200" height="720" fill="url(#hero-sky)" />

      <g style={px(0.15)}>
        <circle cx="820" cy="290" r="115" fill="url(#hero-sun-glow)" opacity="0.95" />
        <circle cx="820" cy="290" r="88" fill="#ffe9a8" />
      </g>

      <g style={px(0.2)} fill="#fff" opacity="0.95">
        <ellipse cx="180" cy="95" rx="95" ry="28" />
        <ellipse cx="130" cy="108" rx="55" ry="18" fill="#dce8f5" opacity="0.85" />
        <ellipse cx="1020" cy="75" rx="80" ry="22" />
        <ellipse cx="1080" cy="88" rx="45" ry="14" fill="#dce8f5" opacity="0.8" />
        <ellipse cx="620" cy="55" rx="70" ry="18" opacity="0.75" />
      </g>

      <g style={px(0.35)}>
        <path
          fill="url(#hero-mountain-far)"
          d="M0 420 L0 720 L1200 720 L1200 380 L980 120 L820 280 L650 180 L420 320 L220 200 L0 420 Z"
        />
        <path
          fill="#fff"
          opacity="0.92"
          d="M220 200 L280 248 L340 210 L420 320 L380 268 L320 290 Z"
        />
        <path
          fill="#c5dff0"
          opacity="0.85"
          d="M650 180 L710 230 L780 195 L820 280 L760 250 L690 265 Z"
        />
        <path
          fill="#fff"
          opacity="0.9"
          d="M980 120 L1040 175 L1105 140 L1200 380 L1140 320 L1060 340 Z"
        />
      </g>

      <g style={px(0.45)} fill="url(#hero-hill)" opacity="0.95">
        <path d="M0 520 Q200 440 420 500 T900 470 L1200 510 L1200 720 L0 720 Z" />
      </g>

      <g style={px(0.55)} fill="url(#hero-trees-mid)">
        <path d="M0 560 C120 520 220 580 360 540 S580 520 720 560 S960 530 1200 570 L1200 720 L0 720 Z" />
        {treeSilhouettes(540, 0.85)}
      </g>

      <g style={px(0.7)} fill="#1a0614">
        <path d="M0 620 C80 590 160 640 280 610 S480 600 640 635 S880 605 1200 630 L1200 720 L0 720 Z" />
        {treeSilhouettes(610, 1.15)}
      </g>

    </svg>
  );
}

function treeSilhouettes(baseY, scale) {
  const trees = [];
  const step = 38 * scale;
  for (let i = 0; i < 34; i++) {
    const x = i * step - 20;
    const h = (48 + (i % 5) * 12) * scale;
    const w = 22 * scale;
    trees.push(
      <path
        key={i}
        d={`M${x + w / 2} ${baseY} L${x + w} ${baseY + h * 0.55} L${x + w * 0.72} ${baseY + h * 0.55} L${x + w * 0.85} ${baseY + h} L${x + w * 0.15} ${baseY + h} L${x + w * 0.28} ${baseY + h * 0.55} L${x} ${baseY + h * 0.55} Z`}
      />,
    );
  }
  return <g>{trees}</g>;
}
