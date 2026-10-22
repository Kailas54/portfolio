import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-sand">
            Professional work
          </h2>
        </div>
        <div className="space-y-8">
          {profile.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-sand sm:text-2xl">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sand-dim">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-medium text-leaf-soft">{job.period}</p>
              </div>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-sand-dim sm:text-base">
                {job.highlights.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
