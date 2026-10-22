import { profile } from "../data/profile";

const SHOWCASE_PALETTES = [
  {
    surface: "from-[#aac4dc] via-[#d4e4f2] to-[#f4f8fc]",
    ghostFrom: "#1e40af",
    ghostTo: "#93c5fd",
  },
  {
    surface: "from-[#b8c9d9] via-[#e0eaf3] to-white",
    ghostFrom: "#0f766e",
    ghostTo: "#5eead4",
  },
  {
    surface: "from-[#c4b8d4] via-[#e8e0f0] to-[#faf8fc]",
    ghostFrom: "#6d28d9",
    ghostTo: "#c4b5fd",
  },
  {
    surface: "from-[#d4c4b0] via-[#ece4d8] to-[#faf7f2]",
    ghostFrom: "#b45309",
    ghostTo: "#fcd34d",
  },
];

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
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

function ShowcaseDesktop({ screenshot, title, tilt = -5 }) {
  const screen = screenshot ? (
    <img
      src={screenshot}
      alt={`Screenshot of ${title}`}
      className="h-full w-full bg-neutral-100 object-cover object-top"
      loading="lazy"
      decoding="async"
    />
  ) : (
    <div className="h-full w-full bg-gradient-to-br from-white to-neutral-200" />
  );

  return (
    <div
      className="w-[min(72%,300px)] max-w-[300px] will-change-transform sm:w-[min(68%,320px)] sm:max-w-[320px]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="overflow-hidden rounded-lg bg-neutral-900 p-[4px] shadow-[0_20px_50px_-14px_rgba(15,23,42,0.5)] ring-1 ring-black/15 sm:rounded-xl sm:p-[5px]">
        <div className="overflow-hidden rounded-md bg-neutral-800 sm:rounded-lg">
          <div className="flex h-6 items-center gap-1 border-b border-white/10 bg-[#1a1a1a] px-2.5 sm:h-7 sm:gap-1.5 sm:px-3">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" aria-hidden />
            <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" aria-hidden />
            <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" aria-hidden />
          </div>
          <div className="aspect-[16/10] overflow-hidden">{screen}</div>
        </div>
      </div>
    </div>
  );
}

function enrichWork(project, index) {
  const category = project.category || "";
  let serviceTag = "Web Development";
  if (/brand|design|3d|ui/i.test(category)) serviceTag = "Web Design";
  if (/devops|cloud|ai/i.test(category)) serviceTag = "Engineering";

  const palette = SHOWCASE_PALETTES[index % SHOWCASE_PALETTES.length];
  const ghost =
    project.ghost ??
    (project.title.split(/[\s·–-]/)[0].replace(/[^a-zA-Z0-9]/g, "") || project.title);

  return {
    ...project,
    ghost,
    hook: project.hook ?? `${project.description.split(".")[0]}.`,
    serviceTag: project.serviceTag ?? serviceTag,
    palette,
    tilt: index % 2 === 0 ? -5 : 4,
  };
}

function WorkCard({ project, index, live }) {
  const item = enrichWork(project, index);
  const stagger = index % 2 === 1 ? "md:mt-12 lg:mt-20" : "";

  const content = (
    <>
      <div
        className={`work-showcase-card relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-gradient-to-b sm:min-h-[420px] ${item.palette.surface}`}
      >
        <p
          className="work-showcase-ghost pointer-events-none absolute inset-x-0 top-[14%] z-[2] select-none px-5 text-center font-hero-display text-[clamp(2.75rem,11vw,5.25rem)] leading-[0.9] tracking-tight sm:top-[16%] sm:px-8"
          style={{
            backgroundImage: `linear-gradient(180deg, ${item.palette.ghostFrom} 0%, ${item.palette.ghostTo} 100%)`,
          }}
          aria-hidden
        >
          {item.ghost}
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center px-4 sm:bottom-4">
          <ShowcaseDesktop
            screenshot={item.screenshot}
            title={item.title}
            tilt={item.tilt}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[38%] bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/70 to-transparent"
          aria-hidden
        />

        {live && item.url && (
          <span className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full bg-neutral-900/85 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition group-hover:opacity-100 sm:right-5 sm:top-5">
            Visit site
            <ArrowUpRight />
          </span>
        )}
      </div>

      <div className="mt-6 space-y-3 px-1">
        <h3 className="font-hero-serif text-2xl leading-snug text-white sm:text-[1.65rem]">
          {item.title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-white/55">{item.hook}</p>
        <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/70">
          {item.serviceTag}
        </span>
      </div>
    </>
  );

  if (live && item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className={`group block ${stagger} focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff5a1f]/70`}
      >
        {content}
      </a>
    );
  }

  return <article className={stagger}>{content}</article>;
}

function TechnicalProjectItem({ project }) {
  return (
    <article className="border-b border-[#ff5a1f]/15 py-8 first:pt-0 last:border-b-0 last:pb-0 sm:py-9">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-hero-serif text-xl leading-snug text-[#2a1408] sm:text-2xl">
          {project.title}
        </h3>
        <p className="shrink-0 text-xs uppercase tracking-wider text-[#9a4a28]/80">
          {project.category}
        </p>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4a2c1a]/85 sm:mt-4">
        {project.description}
      </p>
      {project.tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#ff5a1f]/25 bg-white/35 px-3 py-1 text-[11px] font-medium text-[#6b3418]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 bg-[#060606] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <header className="mb-14 flex flex-col items-start md:mb-20 md:items-end md:text-right">
          <p className="flex items-center gap-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" aria-hidden />
            Some Recent Projects
          </p>
          <h2 className="mt-3 max-w-xl font-hero-serif text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
            Selected Work That Delivers Results
          </h2>
        </header>

        <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 lg:gap-x-12 lg:gap-y-10">
          {profile.liveWorks.map((project, index) => (
            <WorkCard key={project.url} project={project} index={index} live />
          ))}
        </div>

        <header className="mb-12 mt-24 flex flex-col items-center text-center">
          <p className="flex items-center gap-2 text-sm text-white/60">
            <span className="h-2 w-2 rounded-full bg-white/30" aria-hidden />
            Research & builds
          </p>
          <h2 className="mt-3 font-hero-serif text-3xl text-white/90 sm:text-4xl">
            Deeper technical work
          </h2>
        </header>

        <div className="work-tech-card mx-auto max-w-4xl rounded-[1.75rem] bg-gradient-to-br from-[#ffe9d9] via-[#ffd9bc] to-[#fff4ea] p-6 sm:p-8 lg:p-10">
          {profile.projects.map((project) => (
            <TechnicalProjectItem key={project.title} project={project} />
          ))}
        </div>

        <p className="mt-20 max-w-lg font-hero-serif text-3xl leading-snug text-white/25 sm:text-4xl lg:mt-28">
          I strive to pay attention to the smallest details
        </p>
      </div>
    </section>
  );
}
