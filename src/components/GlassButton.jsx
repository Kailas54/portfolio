/**
 * Frosted glass CTA — soft glow, glossy highlight, rounded (fiery red variant).
 */
export default function GlassButton({
  href,
  onClick,
  type = "button",
  children,
  icon,
  className = "",
  size = "md",
}) {
  const sizeClass =
    size === "sm"
      ? "glass-btn glass-btn--fire px-4 py-2 text-xs"
      : size === "lg"
        ? "glass-btn glass-btn--fire px-7 py-3.5 text-base"
        : "glass-btn glass-btn--fire px-5 py-2.5 text-sm";

  const inner = (
    <>
      <span className="glass-btn__shine" aria-hidden />
      <span className="relative z-[2] inline-flex items-center gap-2 font-semibold tracking-wide">
        {children}
        {icon}
      </span>
    </>
  );

  const classes = `${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
