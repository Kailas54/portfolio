import { profile } from "../data/profile";

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#060606] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex items-center gap-3 lg:col-span-4 lg:items-start lg:pt-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a1f]" aria-hidden />
            <span className="shrink-0 text-sm font-medium text-white/90">About Me</span>
            <span className="hidden h-px flex-1 bg-white/15 sm:block" aria-hidden />
          </div>

          <div className="lg:col-span-8">
            <p className="font-hero-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.12] tracking-wide text-white/95">
              {profile.aboutIntro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#ff5a1f] py-2 pl-6 pr-2 text-sm font-semibold text-white transition hover:bg-[#ff7139]"
              >
                Start a Project
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#ff5a1f]">
                  <ArrowUpRight />
                </span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white"
              >
                View My Work
                <ArrowUpRight className="text-white/50" />
              </a>
            </div>
          </div>
        </div>

        <div className="about-clients relative mt-20 overflow-hidden border-t border-white/10 pt-12 lg:mt-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#060606] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#060606] to-transparent" />
          <div className="about-clients-track flex min-w-max items-center gap-14 px-4">
            {[...profile.aboutClients, ...profile.aboutClients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-hero-display text-lg tracking-[0.15em] text-white/35 sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
