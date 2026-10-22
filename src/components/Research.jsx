import { profile } from "../data/profile";

export default function Research() {
  return (
    <section id="research" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-leaf-soft">
            Research
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-sand">
            Publications & presentations
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {profile.research.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-sand">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-dim">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="glass mt-8 rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold text-sand">Open source</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-sand-dim">
            {profile.openSource.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
