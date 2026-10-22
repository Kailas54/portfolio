import { profile } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-leaf-soft">
            Skills
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-sand">
            Technical stack from my resume
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillCategories.map((cat) => (
            <div key={cat.name} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-sand">{cat.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-ink/40 px-3 py-1 text-xs text-sand-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
