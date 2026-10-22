/**
 * Circular CTA with label on an SVG motion path + fiery glass center (matches GlassButton).
 */
export default function GlassCircleButton({
  href = "#contact",
  label = "Contact Me",
  icon,
  className = "",
}) {
  const pathId = "hero-contact-circle-path";
  const ringText = `${label.toUpperCase()} · `.repeat(4);

  return (
    <div
      className={`hero-circle-cta relative inline-grid h-[7.25rem] w-[7.25rem] place-items-center sm:h-[8.25rem] sm:w-[8.25rem] ${className}`.trim()}
    >
      <svg
        className="hero-circle-cta__ring pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text
          fill="rgba(255,255,255,0.88)"
          fontSize="7"
          fontWeight="600"
          letterSpacing="2.5"
        >
          <textPath href={`#${pathId}`} startOffset="0">
            {ringText}
          </textPath>
        </text>
      </svg>
      <a
        href={href}
        className="glass-btn glass-btn--fire relative z-10 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full sm:h-[4.75rem] sm:w-[4.75rem]"
        aria-label={label}
      >
        <span className="glass-btn__shine" aria-hidden />
        <span className="relative z-[2]">{icon}</span>
      </a>
    </div>
  );
}
