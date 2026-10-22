import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { useVantaBirds } from "../hooks/useVantaBirds";
import GlassButton from "./GlassButton";
import GlassCircleButton from "./GlassCircleButton";

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 7h9M7 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M7 1l1.6 3.8L13 5.5l-3 2.6.9 4L7 10.2 3.1 12.1 4 8.1 1 5.5l4.4-.7L7 1z"
        fill="#ff5a1f"
      />
    </svg>
  );
}

function NavPills({ activeNav, onSelect, className = "" }) {
  return (
    <nav className={className} aria-label="Primary">
      {profile.heroNav.map((link) => {
        const isActive = activeNav === link.id;
        return (
          <a
            key={link.id}
            href={link.href}
            onClick={() => onSelect(link.id)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive ? "bg-white text-black" : "text-white/85 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

export default function Hero() {
  const vantaRef = useRef(null);
  useVantaBirds(vantaRef);

  const [activeNav, setActiveNav] = useState("about");

  useEffect(() => {
    const ids = ["about", "experience", "work", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveNav(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.4] },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const nameFirst = profile.nameFirst || profile.name.split(" ")[0];
  const nameMiddle =
    profile.nameMiddle || profile.name.split(" ").slice(1, -2).join(" ") || "";
  const nameLast =
    profile.nameLast || profile.name.split(" ").slice(-2).join(" ") || profile.name.split(" ").slice(1).join(" ");

  return (
    <section
      id="top"
      className="hero-dark relative flex min-h-screen flex-col overflow-hidden bg-[#050505] text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(255,90,31,0.55),rgba(255,90,31,0.1)_48%,transparent_75%)]"
        aria-hidden
      />
      <div className="hero-noise pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div
        ref={vantaRef}
        className="absolute inset-0 z-[2] h-full min-h-[100dvh] w-full"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto w-full max-w-[1400px] px-5 pt-6 sm:px-8 lg:pt-8">
          <div className="flex items-center justify-between gap-3">
            <a
              href="#top"
              className="font-hero-display shrink-0 text-lg tracking-[0.12em] sm:text-xl"
            >
              {profile.brand}
            </a>
            <GlassButton href="#contact" icon={<ArrowIcon />} className="shrink-0">
              Contact Me
            </GlassButton>
          </div>
          <NavPills
            activeNav={activeNav}
            onSelect={setActiveNav}
            className="mt-4 flex w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md md:mx-auto md:mt-6 md:w-max"
          />
        </header>

        <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 py-10 sm:px-8 sm:py-14">
          <div className="relative z-20 mb-6 flex flex-wrap items-end gap-x-3 gap-y-4 sm:mb-8 sm:gap-x-4 lg:mb-10">
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-sm text-white/70 sm:mb-3 sm:text-base">
                {profile.heroGreeting}
              </p>
              <h1
                className="font-hero-display flex flex-wrap items-baseline gap-x-[0.06em] text-[clamp(2.85rem,12vw,9.5rem)] leading-[0.86] tracking-[-0.02em] text-white/95"
              >
                <span>{nameFirst}</span>
                <span>{nameMiddle}</span>
                <span>{nameLast}</span>
              </h1>
            </div>
            <GlassCircleButton
              href="#contact"
              label="Contact Me"
              icon={<ArrowIcon className="relative z-[2]" />}
              className="mb-1 shrink-0 sm:mb-2 lg:mb-3"
            />
          </div>

          <div className="relative z-20 grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-lg space-y-4 lg:pt-2">
              <p className="font-hero-display text-2xl tracking-wide text-white/90 sm:text-3xl">
                {profile.role}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/80 sm:text-sm">
                <StarIcon />
                <span>{profile.heroTrust}</span>
              </div>
              <h1 className="font-hero-serif text-2xl leading-snug sm:text-3xl lg:text-[2rem]">
                {profile.heroPitch}
              </h1>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  View Projects
                  <span className="text-white/50">›</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  Resume PDF
                </a>
              </div>
            </div>

            <aside className="hero-glass w-full max-w-md justify-self-end lg:mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a1f]">
                {profile.heroHighlight.title}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
                {profile.heroHighlight.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={profile.resumeUrl}
                  download
                  className="rounded-full bg-[#ff5a1f] px-3 py-1.5 text-xs font-medium text-white"
                >
                  {profile.heroHighlight.chips[0]}
                </a>
                <span className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80">
                  {profile.heroHighlight.chips[1]}
                </span>
              </div>
            </aside>
          </div>
        </div>

        <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="hero-ticker overflow-hidden py-4">
            <div className="hero-ticker-track flex min-w-max items-center gap-8 px-4">
              {[...profile.heroTicker, ...profile.heroTicker].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-8">
                  <span className="font-hero-display text-sm tracking-[0.18em] text-white/90 sm:text-base">
                    {item}
                  </span>
                  <StarIcon />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
